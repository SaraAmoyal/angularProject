using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ListRecipes
    {
        public static List<Recipe> recipesList { get; set; }

        public static List<List<string>> ingred { get; set; }
        public static List<List<string>> prepering { get; set; }
        static ListRecipes()
        {
            List<string> ingreda= new List<string>() { "-Crust:", " 1 cup pecans", " 1 teaspoon stevia-erythritol sweetener (such as Truvia®)", "1 teaspoon cinnamon", " ¼ teaspoon ground nutmeg" , " 2 tablespoons melted butter" , "-Filling:" , " 1 egg" , " 12 ounces cream cheese" , " ½ cup stevia-erythritol sweetener (such as Truvia®)" , " ¼ cup sour cream", " ½ teaspoon vanilla extract" , " ¼ cup unsweetened almond milk" , " 1 tablespoon melted butter" , "-Topping:", " 1 cup frozen mixed berries" , " 1 tablespoon stevia-erythritol sweetener (such as Truvia®)"};
            List<string> ingredb = new List<string>() { "-Gingerbread:", " 2¼ cups all-purpose flour", " 2 teaspoons ground ginger", " 1½ teaspoons ground cinnamon", " 1 teaspoon baking soda", " ½ teaspoon ground cloves", " ¼ teaspoon ground nutmeg", " ¼ teaspoon ground allspice", " ¼ teaspoon salt", " ¾ cup firmly packed dark brown sugar", " ½ cup unsalted butter, softened", " 1 egg", " 1 teaspoon vanilla extract", " ½ cup molasses", "-Cheesecake Filling:", " 2(8 ounce) packages cream cheese, softened", " ½ cup white sugar", " 1 pinch salt", " 2 eggs", " 1½ teaspoons vanilla extract", " 1 teaspoon grated orange zest" };
            List<string> ingredc = new List<string>() { "Cooking spray","14 crisp gourmet cookies(such as Biscoff)(4 oz.)",  "1 cup toasted chopped pecans, divided", "1 / 3 cup plus 2 Tbsp.granulated sugar, divided", "1 / 2 teaspoon kosher salt", "1 / 4 cup unsalted butter, melted", "12 ounces cream cheese, softened", "1 / 2 cup sour cheese", "1 teaspoon vanilla extract", "3 / 4 cup salted caramel topping(such as Smucker’s), divided", "2 large eggs" };
            List<string> ingredd = new List<string>() { "-For Crust:"," ½ cup butter"," 9 whole graham crackers"," ¼ cup packed dark brown sugar"," ¼ teaspoon sea salt","-For Filling:"," 2½ teaspoons unflavored gelatin"," 1 tablespoon cold water"," 3(8 ounce) packages cream cheese, at room temperature"," 2 cups whole-milk Greek yogurt, at room temperature"," ½ pinch white sugar"," 1 tablespoon lemon juice"," 1 teaspoon lemon zest"," 1 pinch sea salt"," 1 teaspoon vanilla extract","-For Topping:"," 4 cups fresh blueberries"," 3 tablespoons packed dark brown sugar"," 2 tablespoons poppy seeds(optional)"," 2 tablespoons lemon juice"," 1 teaspoon lemon zest",};

            ingred = new List<List<string>>(){ingreda, ingredb, ingredc, ingredd};

            List<string> Preperinga = new List<string>() { "Preheat the oven to 350 degrees F (175 degrees C).", "Add pecans to a food processor and chop very finely. Add sweetener, cinnamon, and nutmeg and process for a few more seconds. Pour mixture into a bowl and add melted butter. Stir together and press crust mixture into the bottom of a divided brownie pan with the divider removed.", 
                                                           "Beat egg until fluffy in a large bowl with an electric mixer. Mix in cream cheese 1 ounce at a time. Beat mixture until cream cheese is smooth. Add sweetener, sour cream, vanilla extract, and almond milk. Beat together until filling is smooth. Stir in melted butter. Pour filling over the crust in the brownie pan. Insert divider into the pan.", "ingredad", "Bake in the preheated oven for about 35 minutes.", "Meanwhile, heat a small pot over medium heat. Add mixed berries and sweetener and bring to a simmer, about 5 minutes. Stir berries and crush some with a spoon so that a liquid starts to form. Cook for about 10 minutes more.", "Allow cheesecake bars to cool in the brownie pan, about 1 hour. Pour berry sauce on top of bars." };
            List<string> Preperingb = new List<string>() { "Preheat the oven to 350 degrees F (175 degrees C). Line a 9x13-inch baking pan with enough parchment paper to have overhang on all sides. Lightly grease parchment."
                                                            , "Whisk together flour, ginger, cinnamon, baking soda, cloves, nutmeg, allspice, and salt for the gingerbread in a large bowl until combined.", "Cream brown sugar and butter in a separate bowl with an electric mixed until light and fluffy. Add egg and vanilla extract and beat until thoroughly combined. Mix in molasses."
                                                              , "Add flour mixture to butter mixture in 3 separate additions, mixing only until just combined; dough will be fairly thick. Press 2/3 of the dough firmly and evenly into the bottom of the prepared baking pan, using floured hands to prevent sticking.",
                                                                  "Beat cream cheese, sugar, and salt for the filling in a large bowl until completely smooth and fluffy. Add eggs, 1 at a time, mixing well after each addition. Mix in vanilla extract and orange zest. Pour filling evenly over gingerbread crust and smooth with a spatula. Sprinkle remaining gingerbread dough over the filling and gently press down."
                                                                ,"Bake in the preheated oven until edges are set and the center of the cheesecake only slightly jiggles, 35 to 40 minutes. Cool completely in pan. Once cooled, remove from pan using parchment 'handles' and slice into bars."};
            List<string> Preperingc = new List<string>() { "Tightly wrap outside of a 7-inch springform pan in aluminum foil. Lightly coat pan with cooking spray. Process cookies, 1/2 cup of the pecans, 2 tablespoons of the sugar, and 1/4 teaspoon of the salt in a food processor until finely ground, about 15 seconds. Add butter; pulse to incorporate, about 5 times. Press cookie mixture into bottom and 1 1/2-inches up sides of prepared pan. Freeze until ready to use.",
                                                              "Beat together cream cheese, and remaining 1/3 cup sugar and 1/4 teaspoon salt in the bowl of a heavy-duty electric stand mixer on medium speed until smooth, about 2 minutes. Beat in sour cream, vanilla, and 1/4 cup of the caramel topping. Add eggs, 1 at a time, beating on low just until incorporated after each addition, and stopping to scrape down sides as needed. Pour filling into prepared crust.",
                                                              "Insert steamer rack of a 6-quart electric pressure cooker into cooker; add 1 cup water. Place cheesecake on steamer rack. Close and lock lid of cooker; turn pressure release valve to sealing position. Program cooker to cook on manual on high pressure for 25 minutes. Allow cooker to release pressure (steam) “naturally” for 10 minutes. Turn pressure release valve to venting position to release remaining pressure from cooker until float valve drops. Carefully remove lid, and gently pat top of cheesecake with a paper towel to remove any accumulated condensation, if needed. Carefully lift cheesecake from cooker.",
                                                              "Place pan on a wire rack, and cool cheesecake completely, about 2 hours. Remove foil from pan; cover and chill cheesecake 8 hours or overnight. Remove sides of pan, and top cheesecake with remaining 1/2 cup pecans and 1/2 cup caramel sauce just before serving." };
            List<string> Preperingd = new List<string>() { "Heat butter in a small saucepan over medium-low heat until it smells nutty and brown bits form on the bottom, 15 to 17 minutes. Don't crank up the heat to try to get there faster; you'll just end up with burned butter.",
                                                           "Meanwhile, pulse together graham crackers, brown sugar, and salt in a food processor until fine crumbs form. Carefully pour butter into crumb mixture while food processor is running. Press combined mixture into bottom and sides of a 10-inch tart pan with a removable bottom. Chill for 1 hour or freeze for 20 minutes until set.",
                                                                 "Stir together gelatin and cold water in a small bowl. Let stand for 5 minutes, then microwave until gelatin dissolves, about 10 seconds. ",
                                                            "Beat cream cheese in a bowl with an electric mixer for 30 seconds. Add yogurt, white sugar, lemon juice, lemon zest, salt, and vanilla. Beat until smooth, then beat in gelatin. Pour mixture into the chilled crust. Chill until set, about 2 hours."
                                                            ,"Stir together blueberries, brown sugar, poppy seeds, lemon juice, and lemon zest. Scatter topping over cheesecake."};

            prepering = new List<List<string>>() { Preperinga, Preperingb, Preperingc , Preperingd };
            
            recipesList = new List<Recipe>() 
            {
                new Recipe() {RecipeName = "Keto Berry-Pecan Cheesecake Bars",
                RecipeCategory= "backing",
                RecipePreperingTime =55,
                RecipeDifficultLevel= 1,
                RecipeAddDate= new DateTime(2020, 01, 14),
                RecipeIngredients= ingreda,
                RecipePreparation =Preperinga,
                RecipeuserCode="Ashgf@hs56465",
                RecipePicture ="assets/Keto Berry-Pecan Cheesecake Bars.jpg",
                RecipeIf =true},

                new Recipe() {RecipeName = "Orange-Gingerbread Cheesecake Bars",
                RecipeCategory = "backing",
                RecipePreperingTime =75,
                RecipeDifficultLevel= 2,
                RecipeAddDate = new DateTime(2020, 01, 14),
                RecipeIngredients= ingredb ,
                RecipePreparation =Preperingb,
                RecipeuserCode="Ashgf@hs56465",
                RecipePicture ="assets/Orange-Gingerbread Cheesecake Bars.jpg",
                RecipeIf =true},

                new Recipe() {RecipeName = "Instant Pot Salted Caramel-Pecan Cheesecake",
                RecipeCategory = "backing",
                RecipePreperingTime =90,
                RecipeDifficultLevel= 5,
                RecipeAddDate = new DateTime(2020, 01, 14),
                RecipeIngredients= ingredc ,
                RecipePreparation =Preperingc,
                RecipeuserCode="Da$6578493099",
                RecipePicture ="assets/Instant Pot Salted Caramel-Pecan Cheesecake.jpg",
                RecipeIf =false},

                new Recipe() {RecipeName = "No-Bake Greek Yogurt Cheesecake",
                RecipeCategory = "backing",
                RecipePreperingTime =220,
                RecipeDifficultLevel= 4,
                RecipeAddDate = new DateTime(2020, 01, 14),
                RecipeIngredients= ingredd ,
                RecipePreparation =Preperingd,
                RecipeuserCode="Da$6578493099",
                RecipePicture ="assets/No-Bake Greek Yogurt Cheesecake.jpg",
                RecipeIf =false},

            };
        }
       
 
                        
                      
    }
}