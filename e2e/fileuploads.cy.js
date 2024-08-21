
import 'cypress-file-upload';
describe("fileuploads",()=>{

    //To do this we need to insatll one package called cypress file upload from browser and install in terminal
    //and add command in file import 'cypress-upload-file'
    //The files that u need to upload or any resources should be kept under (fixtures)-----folder. we can just drag and drop into this folder

it('single file upload',()=>{
cy.visit("https://the-internet.herokuapp.com/upload")
cy.get('#file-upload').attachFile('Ramesh_Resume.pdf');  //u need to mention file name here after adding file to fixtures
cy.get('#file-submit').click();
cy.wait(5000);
cy.get('div[class="example"] h3').should('have.text','File Uploaded!')


})

it('file upload-Rename',()=>{

cy.visit("https://the-internet.herokuapp.com/upload")
cy.get('#file-upload').attachFile({filepath:'Ramesh_Resume.pdf', fileName:'RameshRam.pdf'});  //to rename file while uploading file 
cy.get('#file-submit').click();
cy.wait(5000);
cy.get('div[class="example"] h3').should('have.text','File Uploaded!')

    
})

it('File upload-Drag and drop',()=>{

    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#drag-drop-upload').attachFile("Ramesh_Resume.pdf",{subjectType:'drag-n-drop'}) //this subject parameter need to be write must
    cy.wait(5000);
    cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"] div[class="dz-details"] span')
    .contains("Ramesh_Resume.pdf");
})

it('Multiple files upload',()=>{

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get('#filesToUpload').attachFile(["Ram_res.pdf","Ramesh_Resume.pdf"])
    cy.wait(5000);
    cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:')
   

    
})

it.only('file upload-shadow dom',()=>{

    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.html");
    cy.get('.smart-item-name',{includeshadowDom:true}).attachFile("Ram_res.pdf");
    cy.wait(5000);
    cy.get('.smart-item-name',{includeShadowDom:true}).contains('Ram_res.pdf');
    
})

































})