# Book Management Website

This project is a book management website developed using React and Vite for the front-end and Python FastAPI for the back-end. Users can upload books, categorize them, view summaries, and manage their book collections. Summaries are generated using Llama models running locally.

## Features

- **Upload Books:** Users can upload books to the platform.
- **Categorize Books:** Each book is automatically categorized (e.g., Fiction, Biography, Autobiography, Sports).
- **View Books:** Users can view a list of all uploaded books.
- **Generate Summaries:** Users can generate summaries for each book using Llama models running locally.

## Installation

### Front-end (React and Vite)

   ```bash
   git clone <repository_url>
   cd <repository_folder>/frontend
   npm install
  npm run dev
  ```
### Backend (FastAPI)

Navigate to the Backend Directory:
``` cd <repository_folder>/backend
```
Create and Activate a Virtual Environment:
```
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```
Install Dependencies:
```
pip install -r requirements.txt
```
Run the FastAPI Server:
```
uvicorn main:app --reload
```

## Configuration

### Database Configuration

Ensure you have PostgreSQL installed and set up. Update the database URL in the FastAPI configuration file. SQLAlchemy is used to connect to the PostgreSQL database. There is a table for storing the books and their details.

### OpenAI API Configuration

Ensure you have the Llama models set up locally. Update the model path in the FastAPI configuration file.

## Usage

**Upload Books:**
- Navigate to the upload section on the website.
- Upload a book file.

**View Books:**
- Navigate to the books section to see all uploaded books.
- Click on a book to see its details.

**Generate Summaries:**
- Select a book.
- Click on the "Generate Summary" button to get a summary of the book.

## Technologies Used

**Front-end:**
- React
- Vite
- Tailwind CSS

**Back-end:**
- FastAPI
- OpenAI API
- PostgreSQL
- llama models
- SQLAlchemy

  ## Screenshots

### Home Page
  ![WhatsApp Image 2024-07-05 at 4 06 45 AM](https://github.com/Mufsh/bookify/assets/80107839/b623bae9-a252-431e-9bae-3971d47029a4)

  
### Adding a book
  ![WhatsApp Image 2024-07-05 at 4 07 01 AM](https://github.com/Mufsh/bookify/assets/80107839/18eea57e-a34b-4a22-a30f-efaa1d43ba0c)


  ### Editing details

![WhatsApp Image 2024-07-05 at 4 07 14 AM](https://github.com/Mufsh/bookify/assets/80107839/c2529ce2-8222-477a-946d-22f0920144c8)

### Generating Summary
![WhatsApp Image 2024-07-05 at 4 07 27 AM](https://github.com/Mufsh/bookify/assets/80107839/ee66711e-957f-43e7-8eae-4ac0017cb801)


### Generated Summary
![WhatsApp Image 2024-07-05 at 4 07 40 AM](https://github.com/Mufsh/bookify/assets/80107839/5e990c82-4ae3-4415-b8ef-6c11890f8dd3)
