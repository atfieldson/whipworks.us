CREATE TABLE "bullwhips" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "order_id" INT,
    "whip_length_id" INT NOT NULL,
    "handle_length_id" INT NOT NULL,
    "color1_id" INT NOT NULL,
    "color2_id" INT NOT NULL,
    "handle_design_id" INT NOT NULL,
    "concho_id" INT NOT NULL,
    "waxed" BOOLEAN NOT NULL,
    "indy" BOOLEAN DEFAULT 'false',
    "catwhip" BOOLEAN DEFAULT 'false',
    "saberwhip" BOOLEAN DEFAULT 'false',
    "img_chart" TEXT,
	"img_full_thumb" TEXT,
	"img_handle_thumb" TEXT,
	"img_full" TEXT,
	"img_handle" TEXT,
	"img_extra_tall" TEXT,
	"img_extra_wide" TEXT,
	"review" TEXT
);

CREATE TABLE "whip_lengths" (
	"id" SERIAL PRIMARY KEY,
	"length" INT NOT NULL,
	"cost" INT NOT NULL,
    "waxed_cost" INT NOT NULL,
);

INSERT INTO "whip_lengths" ("length", "cost", "waxed_cost")
VALUES 
(4, 200, 20), 
(5, 225, 20), 
(6, 250, 25), 
(7, 275, 25), 
(8, 300, 25), 
(10, 400, 30), 
(12, 500, 30)
; 

CREATE TABLE "handle_lengths" (
	"id" SERIAL PRIMARY KEY,
	"length" INT NOT NULL,
	"cost" INT NOT NULL
);

INSERT INTO "handle_lengths" ("length", "cost")
VALUES 
(8, 0), 
(10, 5), 
(12, 10), 
(14, 15) 
; 

CREATE TABLE "handle_designs" (
	"id" SERIAL PRIMARY KEY,
	"handle_design" VARCHAR(255),
	"cost" INT NOT NULL DEFAULT 0,
	"img_url" TEXT,
	"16p_or_20p" VARCHAR(100) DEFAULT '16 Plait'
);

CREATE TABLE "conchos_and_pommels" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"cost" INT NOT NULL DEFAULT 0,
	"color" TEXT,
	"in_stock" INT,
	"img_url" TEXT
);

CREATE TABLE "colors" (
	"id" SERIAL PRIMARY KEY,
	"color" VARCHAR(255),
	"in_stock" INT,
	"img_spool" TEXT,
	"img_right" TEXT NOT NULL,
	"img_left" TEXT NOT NULL,
	"img_right_waxed" TEXT NOT NULL,
	"img_left_waxed" TEXT NOT NULL
);

INSERT INTO "colors" ("color", "img_spool", "img_right", "img_left", "img_right_waxed", "img_left_waxed")
VALUES 
('acid brown', 'acidBrown.jpg', 'acidBrownRight.jpg', 'acidBrownLeft.jpg', 'acidBrownRightWaxed.jpg', 'acidBrownLeftWaxed.jpg'),
('acid purple', 'acidPurple.jpg', 'acidPurpleRight.jpg', 'acidPurpleLeft.jpg', 'acidPurpleRightWaxed.jpg', 'acidPurpleLeftWaxed.jpg'),
('black', 'black.jpg', 'blackRight.jpg', 'blackLeft.jpg', 'blackRightWaxed.jpg', 'blackLeftWaxed.jpg'),
('burgundy', 'burgundy.jpg', 'burgundyRight.jpg', 'burgundyLeft.jpg', 'burgundyRightWaxed.jpg', 'burgundyLeftWaxed.jpg'),
('caribbean', 'caribbean.jpg', 'caribbeanRight.jpg', 'caribbeanLeft.jpg', 'caribbeanRightWaxed.jpg', 'caribbeanLeftWaxed.jpg'),
('charcoal grey', 'charcoalGrey.jpg', 'charcoalGreyRight.jpg', 'charcoalGreyLeft.jpg', 'charcoalGreyRightWaxed.jpg', 'charcoalGreyLeftWaxed.jpg'),
('colonial blue', 'colonialBlue.jpg', 'colonialBlueRight.jpg', 'colonialBlueLeft.jpg', 'colonialBlueRightWaxed.jpg', 'colonialBlueLeftWaxed.jpg'),
('copperhead', 'copperhead.jpg', 'copperheadRight.jpg', 'copperheadLeft.jpg', 'copperheadRightWaxed.jpg', 'copperheadLeftWaxed.jpg'),
('coyote brown', 'coyoteBrown.jpg', 'coyoteBrownRight.jpg', 'coyoteBrownLeft.jpg', 'coyoteBrownRightWaxed.jpg', 'coyoteBrownLeftWaxed.jpg'),
('crimson', 'crimson.jpg', 'crimsonRight.jpg', 'crimsonLeft.jpg', 'crimsonRightWaxed.jpg', 'crimsonLeftWaxed.jpg'),
('emerald green', 'emeraldGreen.jpg', 'emeraldGreenRight.jpg', 'emeraldGreenLeft.jpg', 'emeraldGreenRightWaxed.jpg', 'emeraldGreenLeftWaxed.jpg'),
('foliage green', 'foliageGreen.jpg', 'foliageGreenRight.jpg', 'foliageGreenLeft.jpg', 'foliageGreenRightWaxed.jpg', 'foliageGreenLeftWaxed.jpg'),
('forest green', 'forestGreen.jpg', 'forestGreenRight.jpg', 'forestGreenLeft.jpg', 'forestGreenRightWaxed.jpg', 'forestGreenLeftWaxed.jpg'),
('galaxy', 'galaxy.jpg', 'galaxyRight.jpg', 'galaxyLeft.jpg', 'galaxyRightWaxed.jpg', 'galaxyLeftWaxed.jpg'),
('gold', 'gold.jpg', 'goldRight.jpg', 'goldLeft.jpg', 'goldRightWaxed.jpg', 'goldLeftWaxed.jpg'),
('goldenrod', 'goldenrod.jpg', 'goldenrodRight.jpg', 'goldenrodLeft.jpg', 'goldenrodRightWaxed.jpg', 'goldenrodLeftWaxed.jpg'),
('imperial red', 'imperialRed.jpg', 'imperialRedRight.jpg', 'imperialRedLeft.jpg', 'imperialRedRightWaxed.jpg', 'imperialRedLeftWaxed.jpg'),
('international orange', 'internationalOrange.jpg', 'internationalOrangeRight.jpg', 'internationalOrangeLeft.jpg', 'internationalOrangeRightWaxed.jpg', 'internationalOrangeLeftWaxed.jpg'),
('khaki', 'khaki.jpg', 'khakiRight.jpg', 'khakiLeft.jpg', 'khakiRightWaxed.jpg', 'khakiLeftWaxed.jpg'),
('lilac', 'lilac.jpg', 'lilacRight.jpg', 'lilacLeft.jpg', 'lilacRightWaxed.jpg', 'lilacLeftWaxed.jpg'),
('midnight blue', 'midnightBlue.jpg', 'midnightBlueRight.jpg', 'midnightBlueLeft.jpg', 'midnightBlueRightWaxed.jpg', 'midnightBlueLeftWaxed.jpg'),
('moss green', 'mossGreen.jpg', 'mossGreenRight.jpg', 'mossGreenLeft.jpg', 'mossGreenRightWaxed.jpg', 'mossGreenLeftWaxed.jpg'),
('neon green', 'neonGreen.jpg', 'neonGreenRight.jpg', 'neonGreenLeft.jpg', 'neonGreenRightWaxed.jpg', 'neonGreenLeftWaxed.jpg'),
('neon orange', 'neonOrange.jpg', 'neonOrangeRight.jpg', 'neonOrangeLeft.jpg', 'neonOrangeRightWaxed.jpg', 'neonOrangeLeftWaxed.jpg'),
('neon pink', 'neonPink.jpg', 'neonPinkRight.jpg', 'neonPinkLeft.jpg', 'neonPinkRightWaxed.jpg', 'neonPinkLeftWaxed.jpg'),
('neon turquoise', 'neonTurquoise.jpg', 'neonTurquoiseRight.jpg', 'neonTurquoiseLeft.jpg', 'neonTurquoiseRightWaxed.jpg', 'neonTurquoiseLeftWaxed.jpg'),
('olive drab', 'oliveDrab.jpg', 'oliveDrabRight.jpg', 'oliveDrabLeft.jpg', 'oliveDrabRightWaxed.jpg', 'oliveDrabLeftWaxed.jpg'),
('orange blaze camo', 'orangeBlazeCamo.jpg', 'orangeBlazeCamoRight.jpg', 'orangeBlazeCamoLeft.jpg', 'orangeBlazeCamoRightWaxed.jpg', 'orangeBlazeCamoLeftWaxed.jpg'),
('royal blue', 'royalBlue.jpg', 'royalBlueRight.jpg', 'royalBlueLeft.jpg', 'royalBlueRightWaxed.jpg', 'royalBlueLeftWaxed.jpg'),
('rust', 'rust.jpg', 'rustRight.jpg', 'rustLeft.jpg', 'rustRightWaxed.jpg', 'rustLeftWaxed.jpg'),
('scarlet red', 'scarletRed.jpg', 'scarletRedRight.jpg', 'scarletRedLeft.jpg', 'scarletRedRightWaxed.jpg', 'scarletRedLeftWaxed.jpg'),
('silver', 'silver.jpg', 'silverRight.jpg', 'silverLeft.jpg', 'silverRightWaxed.jpg', 'silverLeftWaxed.jpg'),
('stars and stripes', 'starsAndStripes.jpg', 'starsAndStripesRight.jpg', 'starsAndStripesLeft.jpg', 'starsAndStripesRightWaxed.jpg', 'starsAndStripesLeftWaxed.jpg'),
('turquoise', 'turquoise.jpg', 'turquoiseRight.jpg', 'turquoiseLeft.jpg', 'turquoiseRightWaxed.jpg', 'turquoiseLeftWaxed.jpg'),
('white', 'white.jpg', 'whiteRight.jpg', 'whiteLeft.jpg', 'whiteRightWaxed.jpg', 'whiteLeftWaxed.jpg'),
('yellow', 'yellow.jpg', 'yellowRight.jpg', 'yellowLeft.jpg', 'yellowRightWaxed.jpg', 'yellowLeftWaxed.jpg');

CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"cost" INT NOT NULL,
	"in_stock" INT,
	"color_id" INT,
	"img_url" TEXT
);

CREATE TABLE "order_products" (
	"id" SERIAL PRIMARY KEY,
	"product_id" INT,
	"order_id" INT,
	"quantity_of_product" INT
);

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"email" VARCHAR (255),
	"phone_number" INT,
	"country" VARCHAR (255),
	"gender" VARCHAR (255),
	"is_admin" BOOLEAN DEFAULT 'false'
);

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"shipping_name" TEXT NOT NULL,
	"shipping_street_address" TEXT NOT NULL,
	"shipping_city" TEXT NOT NULL,
	"shipping_country" TEXT NOT NULL,
	"shipping_zip" INT NOT NULL,
	"shipping_cost" INT NOT NULL,
	"order_notes" TEXT NOT NULL,
	"complete" BOOLEAN DEFAULT 'false'
);