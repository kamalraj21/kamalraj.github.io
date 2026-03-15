import fitz
import sys

def extract_pdf(pdf_path, out_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(text)

if __name__ == "__main__":
    extract_pdf(sys.argv[1], sys.argv[2])
