# CloudLabelUpdates
UI for upkeep on data not included in ERP.


## Project Desc:

Locally hosted UI for integration with **CloudLabel DynamoDB**. The purpose of
this project is to create an interface that will update the label data resources
housed in **DynamoDB**. This information includes label **Template Mapping**, **Printer Mapping**, and 
**Customer Specific Info**. Keeping **CloudLabel DynamoDB** updated is critical to the function of
printing labels.

## Functionality:
Secure signin.
Capture user identity.
Search for existing product information.
Create new product information.
Confirm successful upload.
Update existing product.
Remove existing product.

## Technical Aspects:
React application hosted in Docker container on \\Dockerhost server.
Opt1. Flask app in container to run logic layer to DynamoDB.
Opt2. Run requests through API Gateway, Lambda, to DynamoDB.

## Project Steps:
Build React UI
Give functionality with Python logic layer.
Run Python in OPT1 or Opt2.

## Risks:
Mismanaged data input.
Accidental deletes.

## Security Control:
Locally hosted.
All requests originate locally.

## Benefits:
Platform for moving to fully serverless implementation.
Gives users ability to keep product data updated.

## Future Versions:
Entire project moved to AWS Serverless Architecture.
