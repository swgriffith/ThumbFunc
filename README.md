# ThumbFunc
This example demonstrates a basic function which watches a blob storage container for a new image, when triggered will use the Jimp node module to create a thumbnail of that image and place it in another blob folder.

## Setup
1. Clone (or download) this repo

2. In the Azure portal create a new Resource Group

3. Within the Resource Group create a new Storage Account of type 'General'.

Note: Your storage account name must be unique

![Create Storage Account](/images/storageacct.png)

4. Open the newly created storage account, select 'Blobs' and create two containers named 'uploads' and 'thumbs'

![Create Blob Containers](https://github.com/swgriffith/ThumbFunc/raw/master/images/containers.PNG)

5. Create a new 'Function App' in the Resource Group

![Create Function App](https://github.com/swgriffith/ThumbFunc/raw/master/images/functionapp.PNG)

6. Open the Function App

7. Click the + next to Functions to add a new Function

8. Choose 'create your own custom function' and select Javascript for language and then choose 'BlobTrigger - Javascript' for the function template.

9. In the 'Azure Blob Storage Trigger' section click on 'new' to connect to your storage account, and then choose your storage account from the list.

10. Change the path to point to uploads/{name}

11. Paste the contents of index.js from the git repo into your index.js, overwriting the current contents, and then click 'Save'.

12. Click on 'View Files' in the right hand pane and then select the 'function.json' file.

13. Add the second section for the output (outbound) of the function, you can copy from the git repo. Make sure you update the 'connection' name to match the connection name used in the input were your 'uploads' and 'thumbs' containers are located. Also add the "dataType": "binary" line to the input section. When complete your function.json should look something like the following:

![Function JSON](/images/functionjson.PNG)

14. Save the function.

15. In the 'View Files' window create a new file called 'package.json' and copy and paste the package.json contents from the git repo. Update the name in the file to match your function name and then save.

16. Click on the top level of the function app and then go to 'Platform Features'.

![Platform Features](/images/platformfeatures.PNG)

17. Under 'Development Tools' open 'Advanced tools (Kudu)'. This will open up the Kudu environment editor.

18. Go to 'Debug Console' --> 'CMD'

19. Navigate to 'site/wwwroot/***YourFunctionName***'

20. Run the following to install the node modules

```
npm install
```

21. Navigate back to your function so that you can see the log output. In a separate window open the 'uploads' blob container and upload a file. Back in the function app watch the logs to see the process execute. You can then look in the thumbs container for the thumbnail.