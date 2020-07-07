# 👩‍🔬chemical-app

### Challenge description

**Data**:

- Two spread sheets are provided with the following data:

  - Item 2a
  - Item 2b

- patent no, patent title, chemical name
- both the spread sheets differ in their chemical types (type 1 and type 2)

- Read the data from spread sheets and make them accessible to the UI
- Create a dynamic hyperlink to google patents page for each patent no. given in the excel

**UI Features (see below for screenshot example)**:

- A google like search box for querying the chemical names from both the excel sheets
- As soon as a query (chemical name search) has been entered:
  - Provide a box with the number of patents where the searched chemical appears (in screenshot named as “Total Documents”)
  - Display two tables, one for each of the excel files:
    - Fetch the patent nos. for the searched chemical
    - Display other chemicals found in these patent nos. (separately for each excel, see screenshot)
  - The tables should contain two columns: found chemical names, count of
    patents in which they appear
    - Each table should contain a search and an order option o Each row should be clickable

* On row click: Create a second page that displays the document information
* Document information should be displayed as a table with the patent no., title, and a
  hyperlink to the google patents page
* Provide appropriate error messages for handling non-availability of data

**Bonus points**:

- Import the data from given spreadsheets into a suitable database (additional bonus points
  if done in Neo4j)
- Create an API to query the loaded data
- Authentication with credentials (e.g. GitHub username/tokens)
