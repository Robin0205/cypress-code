
describe("handlingtables",()=>{

beforeEach('Login',()=>{

    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.get("button[type='submit']").click()

    //cy.get().closest();

    //customers->customers

    cy.get("#menu-customer>a").click(); //customers main menu
    cy.get("#menu-customer>ul>li:first-child").click(); //customers sub/child item
})

it.only('check number rows&colums',()=>{

    cy.get("//table[@class='table table-bordered table-hover']>tbody>tr").should('have.lemgth','10');
    cy.get("//table[@class='table table-bordered table-hover']/thead/tr").should('have.length','6');
})

it('check cell data from specific row & colum',()=>{

             cy.get("//table[@class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-chil(3)")
             .contains("3@gmail.com");

})

it('Read all the rows & colums data in the first page',()=>{

    cy.get("/table[@class='table table-bordered table-hover']>tbody>tr")
    .each(($row, index, $rows)=>{

        cy.wrap($row).within(()=>{

            cy.get("td").each(($col, index, $cols)=>{

             cy.log($col.text());
            })

        })

    })


})

it('pagination',()=>{

    //find totoal number of pages

   /* let totalpages;
    cy.get(".col-sm-6.text-end").then((e)=>{
        let mytext=e.text();        //showing 1 to 10 of 5581 (559 pages)
        totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("pages")-1);
        cy.log("Total number of pages in a table=====>"+totalpages);

      })*/

        let totalpages = 5;
for (let p = 1; p <= totalpages; p++) {
    if (totalpages > 1) {
        cy.log("Active page is===" + p);
        cy.get("ul[class='pagination'] li:nth-child(" + p + ")").click();
        cy.wait(3000);

        cy.get("//table[@class='table table-bordered table-hover'] > tbody > tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td:nth-child(3)').then((e) => {
                        cy.log(e.text()); // Email
                    });
                });
            });
    }
}

})



})
