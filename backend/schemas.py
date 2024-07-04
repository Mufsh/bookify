from pydantic import BaseModel
from database import Base
# Schema for creating a new book
class BookCreate(BaseModel):
    title: str
    author: str
    year: int
    category: str
    file: str

# Schema for returning a book
class Book(BaseModel):
    id: int
    title: str
    author: str
    year: int
    category: str
    file: str

class BookUpdate(BaseModel):
    title: str
    author: str
    year: int
    category: str
# Additional schemas can be defined for updates, etc., as needed
