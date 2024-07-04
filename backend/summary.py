from openai import OpenAI
from PyPDF2 import PdfReader


def generate_summary(filename):
    client = OpenAI(
        base_url = 'http://localhost:11434/v1',
        api_key='ollama', # required, but unused
    )

    file_path = f"files/{filename}.pdf"

    file_contents = read_pdf_text(file_path)
    print("Contents of the file: ", file_contents)
    response = client.chat.completions.create(
    model="qwen2:1.5b",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"I will give you a text and you have to summarize it for me in less than 150 words. Here's the text {file_contents}"},
    ]
    )
    summary = response.choices[0].message.content
    print("Summary: ", summary)
    return summary


def generate_category(file_path):
    client = OpenAI(
        base_url = 'http://localhost:11434/v1',
        api_key='ollama', # required, but unused
    )
    file_contents = read_pdf_text(file_path)
    response = client.chat.completions.create(
    model="qwen2:1.5b",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"I will give you a text, you have to go through the text and categorize it. Here's the text: {file_contents}\n\n Return a single word response which is the name of the category."},
    ]
    )
    category = response.choices[0].message.content
    print("category: ", category)
    return category




def read_pdf_text(pdf_file_path):
    text = ''
    pdf_reader = PdfReader(pdf_file_path)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()

    return text
