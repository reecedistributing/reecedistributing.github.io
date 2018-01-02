

- [X] Create Nested, Dynamically creatable Categories and brands inputs with Vuetify Dialog
- [X] Complete "New Product" view
  - [X] Brands + Categories
    - [X] Get brands & categories to reload their entire queries every time
    - [X] Get categories to create
    - [X] Get images to create
  - [X] Require that min price is less than max price 

  - [] Fix/complete search/filter mechanisms for products

  - [X] product delete confirmation
    - [X] "delete" button opens confirmation dialog.
    - [X] "Yes, I'm sure" button deletes product
    - [X] dialog closes

- [X] Fix Product Sort

- [] Inquiries
  - [] Create Inqs
    <!-- Inqs are created one-at-a-time, by adding and removing products, and ultimately submitting the inquiry -->
    - [] Fetch un-sent inquries immediately on mount
    - [] Dynamically show add/remove buttons on products depending on if they are in the inquiry
    - [] Add/Remove products accordingly w/ button
    - [] Pop up info box below `Inquiries` Tab when product is added w/ 5 second expiration reminding user that they can submit the inquiry when ready.
    - [] Inquiry Submit Form
      - [] Pre-filled Title input in the format of `<COMPANY-NAME>--<DATE>`
      - [] List component of Products
        - [] Ability to add/remove products from this view
      - [] Questions/Comments field w/ label "Please include any questions or comments concerning this inquiry below."
- [] Static Pages
  - [] Contact Us
  - [] About Us
  - [] FAQ's
  - [] Help