## CHEWIER

Hutch Rhees

Alexander McKelvey

Lauren Lowe

Adrien Chan

Suk Chung


Chewier - For when the bowl is empty and they start to guilt trip you
A pet food e-commerce site that includes the option to create your own customized pet food formula.


## DESIGN
[API Design](api-design.md)

[Wireframes](wifeframes.md)


## TARGET CUSTOMER/AUDIENCE

Our target audience is pet owners who are looking for a customizable shopping experience.

## MVP/FUNCTIONALITY

Users can create an account and log into that account.  While logged in they can create and add a pet profile to their account, complete a form that creates a customized pet food formula and adds it to their cart, and checkout their shopping cart.  Logged in and non-logged in users can browse the site inventory by viewing the entire inventory, applying a filter option that allows for a browsing experience that offers a targeted inventory, or utilize a search bar to search for specific items in the inventory.    Non-logged in users can also add items to their shopping cart, but must log in in order to complete the checkout process (double check this, may be able to check out now as non-logged in)

## HOW TO RUN THE APPLICATION LOCALLY

Enter the following command to clone the repo into your directory: git clone https://gitlab.com/group-1-halas/chewier

To create the necessary Docker containers, open Docker desktop and enter the following commands into your terminal:

docker volume create postgres-data
docker volume create pg-admin
docker volume create jwtdown-db-data
docker-compose build
docker-compose up

Once the Docker containers are up and running, open localhost:3000 in your browser to access the React front end.

Navigate to:

localhost:8080/docs to test the accounts microservice backend with Swagger UI, or

localhost:8090/docs to test the inventory microservice backend with the Swagger UI.
