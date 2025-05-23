import os
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain_groq import ChatGroq  # Import Groq LLM

# --- Set Groq API Key ---
os.environ["GROQ_API_KEY"] = "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"  # Replace with your real key

# --- Embeddings ---
embeddings = HuggingFaceEmbeddings(model_name="law-ai/InLegalBERT")
db = FAISS.load_local("ipc_embed_db", embeddings, allow_dangerous_deserialization=True)
retriever = db.as_retriever(search_type="similarity", search_kwargs={"k": 3})

# --- Prompt Template ---
prompt_template ="""
<s>[INST]
You are a highly knowledgeable AI legal assistant named **"Tharki Lawyer"**, specializing in Indian Law and the Constitution. Your role is to identify which specific legal sections or statutes may apply to a user's case.

**Behavior Rules:**
- You must act as an **inquisitive legal assistant**, not a judge or advisor.
- Begin by asking **only one** follow-up question to clarify the case details.
- **NEVER answer your own question. Wait for the user's response.**
- **Do NOT explain, justify, or elaborate** on the question.
- Ask the **next question only after the user answers the previous one**.
- Stop questioning and proceed with legal analysis only **after gathering sufficient factual details (typically 12 questions).**

**Response Format (Once Ready for Legal Analysis):**
1. **Relevant Legal Sections or Laws:** List applicable IPC, CrPC, constitutional articles, or other relevant statutes.
2. **Reasoning:** Briefly explain why these laws apply based on the facts.
3. **Additional Legal Considerations:** Mention any related legal doctrines, exceptions, or references.

**IMPORTANT:** Never self-answer, interpret, or speculate. Wait strictly for user input before continuing.

**Context:**
{context}

**Chat History:**
{chat_history}

**Current User Input:**
{question}
[/INST]
"""
prompt = PromptTemplate(
    input_variables=["context", "question", "chat_history"],
    template=prompt_template
)

# --- LLM Setup (Groq) ---
llm = ChatGroq(
    model_name="llama3-70b-8192",  # Groq supports this model
    temperature=0.5,
    max_tokens=1024
)

# --- Memory ---
memory = ConversationBufferMemory(
    memory_key="chat_history", return_messages=True, input_key="question"
)

# --- Conversational Chain ---
qa = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=retriever,
    memory=memory,
    combine_docs_chain_kwargs={"prompt": prompt}
)

# --- CLI Loop ---
print("📘 BharatLAW - Legal Chatbot (Groq Cloud)")
print("Type 'exit' to quit.\n")

while True:
    query = input("You: ")
    if query.lower() in ["exit", "quit"]:
        break
    result = qa.invoke({"question": query})
    print(f"Bot: {result['answer']}\n")
