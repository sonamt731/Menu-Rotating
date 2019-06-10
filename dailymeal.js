        var day;
        var dish; 
        var describe;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday. "; 
                dish = "Pani Puri.";
                describe = "Potato, onion, chickpeas, coriander chutney stuffed crispy puri drenched in sour and spicy mint flavored water (pudina pani) easily fills one’s mouth and takes taste buds on a journey of heaven and it is no wonder that it’s a popular street snack.";
                document.getElementById("panipuri").style.display = "block";

            break;
            case 1:
                day = "Monday. ";
                dish = "Paneer Makhani.";
                describe ="Indian cottage cheese in simmered tomato cashew gravy, topped with milk cream.";
                document.getElementById("paneer").style.display = "block";

            break;
            case 2:
                day = "Tuesday. ";
                dish = "Tandoor Chicken.";
                describe = "Skinless legs and thighs are marinated in a tenderizing mixture of yogurt, lemon juice, and spices and the meat is slashed to the bone in several places helping the marinade penetrate and the chicken cook more quickly.";
                 document.getElementById("tandoorichicken").style.display = "block";

            break;
            case 3:
                day = "Wednesday. ";
                dish = "Dum Aloo.";
                describe = "Spicy Potatoes served in a tangy gravy with warm naan. Perfect soup like gravy dish to warm the day.";
                document.getElementById("dumaloo").style.display = "block";

            break;
            case 4:
                day = "Thursday. ";
                dish = "Masala Dosa.";
                describe = "A dosa is South Indian, fermented crepe made from rice batter and black lentils. Masala Dosa, specifically, is when you stuff it with a lightly cooked filling of potatoes, fried onions and spices.";
                document.getElementById("masaladosa").style.display = "block";

            break;
            case 5:
                day = "Friday. ";
                dish = "Biryani.";
                describe = "Your favourite chicken curry (or vegetable or other protein of choice) buried under a mound of delicately spiced fluffy rice, all made in one pot. The rice is steamed over a low heat so it absorbs the flavours of the curry bubbling away underneath.";
                document.getElementById("biryani").style.display = "block";

            break;
            case  6:
                day = "Saturday. ";
                dish = "Masala Fried Fish.";
                describe = "Tangy fish in a spicy, thick and delicious coating. Fried to crispy perfection.";
                document.getElementById("fish").style.display = "block";

        }
        document.getElementById("dayofweek").innerHTML = "Today is " + day;
        document.getElementById("dishoftheday").innerHTML = "Today's special is " + dish;
        
        document.getElementById("description").innerHTML =  describe;
        document.getElementById("description").style.color =  "#150980";

        function myFunction() {
        document.getElementById("dayprint").innerHTML = day;
        }
