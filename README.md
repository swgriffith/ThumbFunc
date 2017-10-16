# ThumbFunc
This example demonstrates a basic function which watches a blob storage container for a new image, when triggered will use the Jimp node module to create a thumbnail of that image and place it in another blob folder.

## Setup
1. Clone (or download) this repo

2. In the Azure portal create a new Resource Group

3. Within the Resource Group create a new Storage Account of type 'General'.

Note: Your storage account name must be unique

![Create Storage Account](/images/storageacct.png)

4. Open the newly created storage account, select 'Blobs' and create two containers named 'uploads' and 'thumbs'

![Create Blob Containers](/images/containers.png)

5. Create a new 'Function App' in the Resource Group

![Create Function App](/images/functionapp.png)

6. Open the Function App

7. Click the + next to Functions to add a new Function

8. Choose 'create your own custom function' and select Javascript for language and then choose 'BlobTrigger - Javascript' for the function template.

9. In the 'Azure Blob Storage Trigger' section click on 'new' to connect to your storage account, and then choose your storage account from the list.

10. Change the path to point to uploads/{name}

11. Paste the contents of index.js from the git repo into your index.js, overwriting the current contents, and then click 'Save'.

12. Click on 'View Files' in the right hand pane and then select the 'function.json' file.

13. Add the second section, you can copy from the git repo, for the output blob container.






