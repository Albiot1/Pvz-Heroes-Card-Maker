//MY OWN PAGE ABOUT MODDING
//https://github.com/Albiot1/PVZ-Heroes-Modding-Page/wiki
//


//#region INIT

/**
 * Make a component struct
 * @param {string} name Component type
 * @param {struct} data Some data
 * @returns struct
 */
function component_make(name,data)
{
if (data==undefined)
data={}

return val=
{
$type:"PvZCards.Engine.Components."+name+", EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
$data:data
}

}

/**
 * Make a query struct
 * @param {string} name 
 * @param {*} data 
 * @returns struct
 */
function query_make(name,data)
{
if (data==undefined)
data={}

console.log(data);


return val=
{
$type:"PvZCards.Engine.Queries."+name+", EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
$data:data
}


}

/**
 * Needed to make effects for cards
 * @returns struct
 */
function effectentitiesdescriptor()
{
return descriptor=component_make("EffectEntitiesDescriptor",{ entities:[] } )
}

/**
 * Effect entity group id
 * @param {number} group_id 
 * @returns struct
 */
function effect_group(group_id)
{
return val=component_make("EffectEntityGrouping", {AbilityGroupId:group_id} )
}

//#endregion

//#region ENUMS
const cardtype={
Plant:"Plant",
PlantTrick:"Plant-Trick",
PlantHeroTrick:"Plant-Hero-Trick",
PlantEnvironment:"Plant-Environment",
Zombie:"Zombie",
ZombieTrick:"Zombie-Trick",
ZombieHeroTrick:"Zombie-Hero-Trick",
ZombieEnvironment:"Zombie-Environment"
}

const sides={
Left:"ToTheLeft",
Right:"ToTheRight",
Either:"Either"
}

const player_datas={
BlockMeter:["BlockMeterValueQuery",0],
SunCounter:["SunCounterComparisonQuery",1],
TurnCounter:["TurnCountQuery",2]
}

const activation_times={
instant:"Immediate",
next_turn:"NextTurn"
}

const simple_queries={
Self:"SelfQuery",
WillTriggerEffects:"WillTriggerEffectsQuery",
IsAlive:"IsAliveQuery",
Fighter:"FighterQuery",
TargetableInPlayFighter:"TargetableInPlayFighterQuery",
TriggerOnDeath:"WillTriggerOnDeathEffectsQuery",
Trick:"TrickQuery",
InHand:"InHandQuery",
FusionOnSelf:"SpringboardedOnSelfQuery",
SameLaneAsQuery:"WasInSameLaneAsSelfQuery",
SameLanseAsTarget:"SameLaneAsTargetQuery",
Target:"TargetQuery",
IsActive:"IsActiveQuery",
UnopposedLane:"InUnopposedLaneQuery"
}

const components={
Player:"PvZCards.Engine.Components.Player, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Plants:"PvZCards.Engine.Components.Plants, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Zombies:"PvZCards.Engine.Components.Zombies, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Lane:"PvZCards.Engine.Components.Lane, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
GrassTerrain:"PvZCards.Engine.Components.GrassTerrain, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
HighgroundTerrain:"PvZCards.Engine.Components.HighgroundTerrain, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Superpower:"PvZCards.Engine.Components.Superpower, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Aquatic:"PvZCards.Engine.Components.Aquatic, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Evolved:"PvZCards.Engine.Components.Evolved, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
Mustache:"PvZCards.Engine.Components.Mustache, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
MarkedForDeath:"PvZCards.Engine.Components.MarkedForDeath, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const triggers={
Damage:"DamageTrigger",
Play:"PlayTrigger",
Destroy:"DestroyCardTrigger",
SurpriseStart:"SurprisePhaseStartTrigger",
DiscardFromPlay:"DiscardFromPlayTrigger",
TurnStart:"TurnStartTrigger",
Reveal:"RevealTrigger",
Freeze:"SlowedTrigger",
Buff:"BuffTrigger",
Move:"MoveTrigger",
DrawCard:"DrawCardTrigger",
LaneCombatEnd:"LaneCombatEndTrigger",
LaneCombatStart:"LaneCombatStartTrigger",
CombatEnd:"CombatEndTrigger",
EnterBoard:"EnterBoardTrigger",
ReturnToHand:"ReturnToHandTrigger",
ExtraAttack:"ExtraAttackTrigger",
Heal:"HealTrigger",
RevealPhaseEnd:"RevealPhaseEndTrigger"
}

const factions={
plants:"Plants",
zombies:"Zombies"
}

const card_prefab={
Small_Nut: "Small-Nut",
Sting_Bean: "e093a94c-1a47-42e8-a23c-c6db1bf1b1eb",
Wall_Nut: "6d9084e1-7efb-472b-9205-362e1aa45015",
Pismashio: "4f6ad95c-e9c3-43ea-95cf-223e47302f51",
Spineapple: "00f8f7f7-47ed-435e-91cf-1bccf134d528",
Potato_Mine: "38fa5de6-cde9-4de7-9c46-7882bf25182b",
Cactus: "bff0d95a-5aa1-4b80-b62c-c98e82f51dee",
Gardening_Gloves: "13bbd37a-8555-4a16-9ba6-929f77f037b8",
Sea_Shroom: "063a10ac-db16-45b1-99c7-079e6643e291",
Water_Chestnut: "cae163ff-5524-47c4-b836-7062fb14b3a0",
Pea_Nut: "910b506e-b3c2-4fdc-ae7c-d420121bf694",
Steel_Magnolia: "9dd40a2b-0bf0-46a9-86af-ecdbcbd80e0d",
Photosynthesizer: "Gravitational Pull",
Spikeweed_Sector: "Spike Weed",
Grave_Buster: "55e039d0-cee7-4cf7-be45-7a6e1cf96495",
Hibernating_Beary: "4d2d3072-1641-49ee-8fb4-e22df0382377",
Prickly_Pear: "42c3b1b3-32b7-45e3-b1e2-22a71b56bcd3",
Smackadamia: "fb0b76aa-ee92-4fd8-9847-7475127ea599",
Tough_Beets: "Tough_Beets",
Starch_Lord: "Starch Lord",
Blockbuster: "Master Grave Blaster",
Jugger_Nut: "09f699a1-6cea-439a-bf77-2d428df13fab",
Guacodile: "2f9fa005-8b50-4d1a-89be-38e4a82036c4",
Mirror_Nut: "ded7367d-009f-4c3c-aa75-edeaf6e2da99",
Doom_Shroom: "4153a62b-b665-41cc-9173-1df58d5ada8b",
Galacta_Cactus: "Galactacactus",
Force_Field: "Invincible Castle",
Marine_Bean: "Gilly Bean",
Poppin_Poppies: "48435dcd-67eb-4da6-8ab5-92cafb76b3f7",
Soul_Patch: "74c87b4c-55fe-4745-8d6c-9ac4fd8ed082",
Wall_Nut_Bowling: "d1f9eaca-3a91-44cf-9cb2-dc2506cbec73",
Body_Gourd: "Body Gourd",
Loco_Coco: "King Coconut",
Health_Nut: "Health Nut",
Hothead: "281bf161-c2a1-4e88-a992-5c7f47d37f3f",
Bubble_Up: "3285fbe6-1405-4bbb-9668-a231ae6af722",
Nut_Signal: "354f4b16-4381-4c8c-b524-e8cfedae524f",
Root_Wall: "0b97cbac-a500-4138-80ce-49426c605093",
Ensign_Uproot: "Tractor Beam Technician",
Berry_Blast: "a5d5a695-ec1a-47c5-aea8-3812dbd2a7f0",
Buff_Shroom: "1b84d98f-208b-4ff4-9ec6-7f409fa80c2a",
Seedling: "627d117b-a687-47ed-99bf-0301850012aa",
Zapricot: "1c6baedc-ca29-4257-b15a-433078d24049",
Poison_Mushroom: "dc355a05-2b88-4548-a110-ef7600c884e4",
Berry_Angry: "8d093f6d-f44a-4b97-9245-19c2f68a1d17",
Mushroom_Ringleader: "75f7fdda-1d3e-4b8f-8ffb-4db6c72c7533",
Poison_Ivy: "4365550a-8305-4982-a28a-51717cd38753",
Pair_Of_Pears: "3d2607ff-8b12-4bc4-b4fc-bf46832982b2",
Bluesberry: "2cbca8f4-1cd6-46ce-bca0-032d841c8916",
Sizzle: "b0d7a262-e918-4987-b99a-5ae2312b8d7d",
Banana_Bomb: "Flying Banana Bomb",
Mushroom_Grotto: "MushroomGrotto",
Puff_Shroom: "72c0081f-195f-4a81-90f6-41ed383d2e71",
Hot_Lava: "Lava",
Veloci_Radish_Hatchling: "Veloci-Radish Solo",
Shroom_for_Two: "582a8395-5f6e-425c-b94c-04a7bfec877d",
Wild_Berry: "bd3f548c-51ca-4f6c-8621-85f0d9b81566",
Petal_Morphosis: "632c9aa8-3c41-46ca-944d-5046bb4a6504",
Sour_Grapes: "43cec3db-8b28-4e3d-8666-863a3d7bde2d",
Poison_Oak: "2be6972d-45fa-4589-95f8-ec6c2fdabb2e",
Cro_Magnolia: "Mesozoic Magnolia",
Punish_Shroom: "Spore Shooter",
Sergeant_Strongberry: "2890ebec-2c12-40b0-8b42-9efb7d52527a",
Cherry_Bomb: "76be5f28-4ad9-4206-984d-4565e4d660dd",
Grapes_of_Wrath: "28d5dfae-7e2f-4f1d-9694-3e933922d56e",
Astro_Shroom: "Astroshroom",
Imitater: "imitater",
Pineclone: "8da0baad-b03e-445f-b449-4260bc04ff7b",
Dandy_Lion_King: "94cef52d-6637-495c-a339-f3a3a2d6699a",
Kernel_Corn: "c574d894-15cf-42db-a278-4439c8ecee19",
Veloci_Radish_Hunter: "Veloci-Radish",
Blooming_Heart: "Blooming Hearts",
High_Voltage_Currant: "High Voltage Currant",
Transfiguration: "Trans-fig-uration",
Hothead: "281bf161-c2a1-4e88-a992-5c7f47d37f3f",
Meteor_Strike: "fe39cd69-bbe5-45ef-92fc-8c235e79de47",
More_Spore: "535b4dc0-9478-4ddf-a80a-a94fddf22901",
Storm_Front: "8ba8f370-687d-4721-bb53-dadb7f37469e",
Peashooter: "43d3b20a-90b4-4a34-8d55-674b02a38dc1",
Torchwood: "2e4ae395-c3e2-4447-a28c-6d67c18c4f61",
Cabbage_Pult: "75c55047-041e-4b80-8979-79e295477378",
Fertilize: "b527676a-df7a-4e75-8b93-f93a92c0fd4d",
Flourish: "3fbd38c3-b5ab-4988-8e60-64791b88d931",
Grow_Shroom: "057cfef7-26b0-4701-84e5-5c8e0707d3b3",
Repeater: "e3e91f0b-767f-4f69-b325-47c7573e29c8",
Bonk_Choy: "195a7fc7-718f-413a-9109-a5825600db7a",
Pea_Pod: "75ef5193-d566-488e-8af4-7670da55b58e",
Sweet_Potato: "40132ca9-caec-42c0-b51d-c92b0c45d352",
Fire_Peashooter: "a0b225ce-0617-4197-bd44-3234168231e9",
Skyshooter: "045dd030-f276-4f53-92e0-ca1363474b60",
Vegetation_Mutation: "Sprouting Expansion",
Coffee_Grounds: "CoffeeGrounds",
Half_Banana: "Half Banana",
The_Podfather: "e1ec49b6-5c00-4c82-954d-0ddc17705d7c",
Plant_Food: "002f2d4b-7b58-4c32-86f1-0bd414848d4b",
Re_Peat_Moss: "9fd8f05f-d64c-4d7d-ab74-f483a650ce7a",
Whipvine: "231008b3-d16a-45b0-a736-8827a74789bd",
Super_Phat_Beets: "c75c605c-1b68-4e22-9a81-b805932007b6",
Party_Thyme: "979c3287-7555-42d5-a733-8a524815493c",
Black_Eyed_Pea: "20c29686-5b91-4541-9a4e-0f7125bb5ab2",
Potted_Powerhouse: "c08bfe63-390d-4d2d-a498-362b37b98abd",
Espresso_Fiesta: "b3e3f82a-4e46-4610-9a55-4fb06b26dd3f",
The_Red_Plant_It: "Peapod Planet",
Doubled_Mint: "bff2831b-adbe-464d-a19c-021b1730a01d",
Muscle_Sprout: "7a306a86-c517-4120-a2df-c2ecceadde7c",
Bananasaurus_Rex: "2191604d-1bc0-4579-824a-5d41f8ebed2d",
Plucky_Clover: "Lucky Clover",
Embiggen: "1e4e55f9-37b6-4429-a874-d9d33c81f9ff",
Holo_Flora: "c1862d23-cabc-4237-9f9b-715069d8afec",
Time_to_Shine: "8f5b9ee1-53d2-4936-8a7b-69fd863fb3df",
Snowdrop: "774897dd-cd95-4bb6-8c10-7a01c2d4c405",
Weenie_Beanie: "Weenie_Beanie",
Snow_Pea: "177fd8b4-532b-4d34-9ea9-a134ff807b1e",
Cattail: "867a395d-ca39-40a0-a967-6db7fb160bf9",
Smoosh_Shroom: "08e238e9-165b-454b-a941-4d0b0548b2b4",
Threepeater: "1a68871b-6f3e-414c-8b5b-3d93583592e1",
Iceberg_Lettuce: "96789300-5280-486d-a5ea-007de33d15f4",
Shellery: "573988ca-627c-4734-ab35-08f5d8e6781a",
Rescue_Radish: "21bd8b9b-9fc4-47cc-8cbd-cafced2f7df5",
Spring_Bean: "ed882956-00ad-4921-81bf-d861704cd3ec",
Vanilla: "4b0455b2-9e87-4bd5-aa44-c97eeb5b67d5",
Carrotillery: "54a3f5a2-d015-47de-ad15-861b2072f35b",
Planet_of_the_Grapes: "Tactical Position",
Pear_Pal: "97c4f341-d028-45ba-97cc-e51fc2db3a4b",
Admiral_Navy_Bean: "b8299cd4-ab57-4484-8dd7-9b5c0a61a0bd",
Lightning_Reed: "8f62a894-1fa1-433f-92a6-e2a07eeefcf7",
Chilly_Pepper: "8570c741-f4b7-455b-9075-8312c6b2bb96",
Navy_Bean: "353d7ec7-66b8-49b3-abd0-25c990b85948",
Jumping_Bean: "e442ad43-7078-4514-8345-80ab7865f163",
Melon_Pult: "Melonpult",
Lily_Pad: "Lilypad",
Sow_Magic_Beans: "Sow_Magic_Beans",
Bean_Counter: "8ab124be-1d2f-4de4-b634-5ebb72be63a6",
Snapdragon: "aee670d7-eb0d-4c36-9a36-78ec2e5dc64d",
Cool_Bean: "Carbeanite",
Bog_of_Enlightenment: "Bouncy Toy",
Shrinking_Violet: "Shrinking Ultraviolet",
Brainana: "c1fa45e8-0d29-4f3a-9e6d-be40e1e82443",
Winter_Melon: "2aa11f52-3fac-4ec5-8719-8adde30ad7f5",
The_Great_Zucchini: "fbe3242b-d21b-4f57-b8cc-7e8bc462fc03",
Dark_Matter_Dragonfruit: "Deep Space Dragonfruit",
Sap_Fling: "Sap Fling",
Sappy_Place: "Sap",
Big_Chill: "61210b9f-f1e5-4d65-bc00-3ba29af09d11",
Transmogrify: "8b59faf7-3a5a-4d5b-808a-4a7e1d44299f",
Whirlwind: "bef2858d-2bd7-44c9-8ad8-807867aeb06d",
Lieutenant_Carrotron: "Lieutenant Carrot",
Sunflower: "3f961cab-1ca4-4f5e-93b8-1c0383220450",
Mixed_Nuts: "f38aed44-d60b-448d-a82b-6482e850e53a",
Squash: "097a247f-676a-41fa-9bd2-1f7fbdd315ba",
Smashing_Pumpkin: "03887b4d-9cd9-4f11-86ea-91954f789230",
Morning_Glory: "61bddb85-301a-4841-bf11-458f6f0d5212",
Fume_Shroom: "a2bf2b9a-6b9a-437e-b980-8f02dcc08eed",
Pepper_M_D: "c8ea45d6-f8a3-4c3b-bd8f-b9f0ae6c8b4a",
Water_Balloons: "db04b985-de6c-49cd-842d-0fadf7f3a07b",
Venus_Flytrap: "e7e8acfb-2446-4ef3-9743-b2e47507148e",
Bloomerang: "2fffc28d-0278-446b-ae3b-ddd52d838a45",
Metal_Petal_Sunflower: "4444f545-7ee5-45e3-8e14-4114e108046b",
Apple_Saucer: "Apple Saucer",
Venus_Flytraplanet: "Flytrapland",
Lil_Buddy: "eb856c50-f4d8-4aa6-a5f9-73cc98231ca4",
Sunnier_Shroom: "Sun Shroomier",
Sage_Sage: "dd680222-dee2-40d9-949f-bbe0c8782de1",
Magnifying_Grass: "20d61ef9-56f4-4c34-b37b-116d023956bf",
Whack_a_Zombie: "e515e49a-69b0-48de-9e6c-d975b274d2dd",
Lawnmower: "5af23a1d-74ab-4d72-881c-3f4dddc403a3",
Power_Flower: "47eb7229-0e75-4f28-b176-e03c63cd617e",
Twin_Sunflower: "4b41ff4a-c917-4286-b746-009827183014",
Second_Best_Taco_of_All_Time: "51e8baca-57d5-440b-a5d8-a4f1b20bf1e9",
Laser_Bean: "48097dc6-7a51-42ad-8381-38ccbf7e90dc",
Solar_Winds: "Zen Garden",
Wing_Nut: "Wing Nut",
Sun_Strike: "Green Crosshairs",
Briar_Rose: "028be0b0-bf87-417a-8346-3e5bdcf247f9",
Three_Headed_Chomper: "30d8fec3-e1d1-483d-b358-92d37e1f1041",
Cornucopia: "3543764d-7f3b-4d90-aefb-1f32f22fd477",
Astro_Vera: "Astrovera",
Haunted_Pumpking: "Pumpking",
Sun_Shroom: "Sun Shroom",
Geyser: "dd18dcd6-4d64-45bc-ac10-8c6eb2c74566",
Scorched_Earth: "fffd2e60-ca1b-4987-88e6-7d1b9d2d2beb",
Weed_Whack: "b7b20765-f67c-488a-8b98-ad4eaa11c900",
Precision_Blast: "8866dd42-ed4e-4804-9005-e3a4c510e1a2",
Sunburn: "7a20f621-d60a-4bb6-9989-9e800df880d2",
Uncrackable: "fcbde864-ed01-4402-976c-e056da23a79d",
Devour: "97fcb886-dad8-4a2f-aa32-31e0df4523e5",
Tater_Toss: "db7d326e-c93e-4ea9-a25d-ad99928f1022",
Peel_Shield: "Orange Barrier",
Power_Pummel: "093b45c2-b603-4619-b669-15933b7c4364",
Mush_Boom: "ca81a819-580a-4554-80eb-4095a4c36e5b",
Goatify: "e73efab1-ed2a-4e7a-a8d6-8fe25fad1d65",
Blazing_Bark: "611ddfb2-e48a-4054-b1f9-d0eb01c3fd7f",
Carried_Away: "bf160ce3-de2e-4ff6-88d4-d295a97fea58",
Slammin_Smackdown: "51ecff67-ba4e-46ba-ad1b-5426b1381d4e",
Triple_Threat: "f2a68d5f-8b9c-4ae5-aef2-88a002ee2fc0",
Shrink_Ray: "c24eee97-5ec6-4eec-833d-3b3dea0242bb",
Stayin_Alive: "a68c3e0f-b39e-4add-97fd-280b6c2e1e78",
Frozen_Tundra: "95edb684-7a2d-417a-9b9e-34e16fb676eb",
Eureka: "9dbdb6e5-020b-4c67-a43a-b7abb6f28d14",
Witch_s_Familiar: "Meow_Meow_Meow",
Missile_Madness: "295a431c-b762-4fc5-9531-96fc1e1d1dcb",
Octo_Pult: "0237d618-c027-4d95-af14-dca7beced0d2",
Terror_Former_10_000: "Terror-Former 2000",
Pied_Piper: "e68a7ed1-81fa-4bb1-8e53-04f173cb7d1a",
Zookeeper: "0ceb92dd-2a98-47ec-be7e-59174caf3d2b",
Dolphin_Rider: "f4eb02ae-1d87-4200-812f-b20ad02ab8c7",
Locust_Swarm: "4216e32d-6537-4705-ba6a-cfe373a82f01",
Dog_Walker: "d9958a86-9798-4597-9b44-b6483f03304a",
Nibble: "3e290224-8f40-4cd9-8c02-49eb16c574ab",
Snorkel_Zombie: "54b0df99-c255-49da-a18e-a8c0068db7a1",
Yeti_Lunchbox: "Yeti_Lunchbox",
Haunting_Zombie: "7e3a5247-ac44-4e1c-8e67-9470db7ced26",
Loudmouth: "347af810-3555-4823-a0f4-100fe2a8c6b6",
B_flat: "d4e084f9-571b-4cf2-a76d-9a5a8093df62",
Total_Eclipse: "Stinky Mist",
Squirrel_Herder: "55ad35c5-c28b-40ad-b4f4-728fd956f9cf",
Vimpire: "00848e55-e990-459f-8927-beefa06f815e",
Vitamin_Z: "db202cfa-68ff-4a36-9c7a-87a6228a5f02",
Kangaroo_Rider: "a89a2702-07f4-46d7-9bbc-f33d546a118e",
Smashing_Gargantuar: "2a6a346b-bb24-4d25-98b2-a242c5ffd1be",
Biodome_Botanist: "Interplanetary Gardener",
Cosmic_Yeti: "Cosmic Pet",
Primordial_Cheese_Shover: "1000-Year Cheesemonger",
Cat_Lady: "50c383b3-88d2-4dac-8d0f-e558a770494b",
Zombie_Yeti: "a2bb384f-6c59-4efc-a91a-3b3d3a524350",
Deep_Sea_Gargantuar: "993fec89-2d80-47be-a9e4-ac5b8856a0fa",
Maniacal_Laugh: "5e4b72fb-4f78-410a-b355-12c141ccc007",
Area_22: "Zomboss Lab",
Extinction_Event: "Wilting Away",
Nurse_Gargantuar: "669a6dbb-4cc2-4211-9829-6f9a73062afc",
Octo_Zombie: "317bf3e1-1686-4923-81a9-9d07934a0ae6",
Zombot_1000: "235d9d98-deb4-4187-b78d-7cd54fd49b17",
Interstellar_Bounty_Hunter: "Galactic Bounty Hunter",
Mondo_Bronto: "Brontosaurus Rider",
Zom_Bats: "Witches_Familiar",
Acid_Rain: "0c3c04ed-b875-4c01-9ee8-ab5257791711",
Evaporate: "810102c3-be34-41de-b192-b0bd57028bfa",
Galvanize: "e8e1dd57-70ec-42f8-b4e9-44bb0b52f5ab",
Paparazzi_Zombie: "2046244f-4138-4f18-99b4-b53d55795579",
Lurch_for_Lunch: "f407b1b9-69ac-478e-9e53-def5aaf4d5d3",
Fun_Dead_Raiser: "e6683b72-15af-4e30-8003-394e8c35e32f",
Drum_Major: "1c5a1e68-01a0-4ab1-8bf7-4179fc70ca7b",
Chimney_Sweep: "52827e9d-5e5a-49fa-85f5-07d2dd72ae67",
Beam_Me_Up: "bf85df83-ad0e-4fbb-9c9f-389363c71ac6",
Cell_Phone_Zombie: "2fe49558-6272-4d39-9e19-614141e9deb3",
Pool_Shark: "ef75a4c7-f0ba-4da5-88bd-32cb58a487b0",
Zombot_Drone_Engineer: "684e153f-f50c-42cd-8a84-046c581629b8",
Brain_Vendor: "9d127a5d-f8bb-4b6a-a143-19aab4e6c013",
Mountain_Climber: "ce776ea5-8e2a-479c-84af-510ab2488a52",
Cryo_Brain: "CryoBrain",
Medulla_Nebula: "Brain Silo",
Moonwalker: "Space Explorer",
Copter_Commando: "5da9af96-84ae-42aa-8e6d-ff7f76924b8a",
Pirate_s_Booty: "Pot of Silver",
Gentleman_Zombie: "db615956-78b2-427e-be41-e6d39338b822",
Kite_Flyer: "3f1c789c-9e33-4f6a-bc30-104acc53d837",
Gadget_Scientist: "2067f3e7-2cbc-4db9-8475-61f11cf675ba",
Hail_a_Copter: "1828a02e-3554-41c4-af93-946dbc5f0eae",
Wizard_Gargantuar: "13d7b729-74ad-4606-95de-f8b2e68011f1",
Zom_Blob: "Zomblob",
Electrician: "06e07806-2706-47ce-82b2-4bd2915a9b62",
Rocket_Science: "60c7f3aa-9e56-469d-a1df-924591098273",
Mad_Chemist: "1a92d805-d288-4d12-9a5e-ce0099a98132",
Portal_Technician: "e53a3ce4-4f06-4a3e-947e-d353cae906f4",
Transformation_Station: "Transformation Lab",
Duckstache: "Barbarous Barber",
Shieldcrusher_Viking: "6f7bc43a-c755-438d-93e8-40a040b0a3c9",
Trickster: "5aad6be7-3a48-4c49-b82b-2b244bb0128a",
Interdimensional_Zombie: "Replicator Zombie",
Trick_or_Treater: "Trick or Treater",
Thinking_Cap: "Brain in a Jar",
Space_Cadet: "c2018a7b-9ab7-4c6c-bad7-09b6972d544a",
Zom_Bats: "Witches_Familiar",
Cut_Down_to_Size: "4bc41e8e-0ca2-4366-9373-5a97efd60fdc",
Summoning: "843873b3-10cf-43da-8c60-3b43c86ec13f",
Telepathy: "79e9c67d-2216-4673-abd8-b9708c0d6c22",
Backup_Dancer: "819287e9-e7de-468d-9268-7b54814f65e6",
Bungee_Plumber: "025093e5-62a5-4085-a854-569fab0e4839",
Cuckoo_Zombie: "fbc3281d-017e-4578-9dc7-f67247adf8b3",
Disco_Zombie: "08010cd1-9506-4bdb-91b7-848f56136979",
Flamenco_Zombie: "41c22056-f0e2-4d4e-b292-88bd3b94d76f",
Tennis_Champ: "6d77251a-5596-4d56-83eb-4e775c0bc56c",
Unlife_of_the_Party: "e45b5d39-342c-409d-8f63-9f2d5696acd4",
Conga_Zombie: "51457c7b-f561-4250-9e29-a0e4bbd34cce",
Newspaper_Zombie: "c9feb4d6-7296-40a8-9304-344410531126",
Cakesplosion: "ba910304-5208-414a-b2e4-e51059c8201d",
Orchestra_Conductor: "dade9aa2-0d5f-4f84-b265-e09a910f1845",
Foot_Soldier_Zombie: "2e901695-83f7-4fa4-aa6b-35fc569e0c09",
Meteor_Z: "Strength Land",
Exploding_Imp: "80401e7e-626a-4c24-8e39-b61ee07aba99",
Jester: "ebf03e87-a8ec-4e07-b8c4-11e4b807cbc5",
Zombot_s_Wrath: "673954f8-7e13-4d1d-aa3a-faf3193cff7d",
The_Chickening: "31e2da4d-8773-4896-9870-838dddc08f60",
Imp_Throwing_Gargantuar: "b718e4c9-998d-445c-b197-d6ae03e61c30",
Gizzard_Lizard: "Lizard Zombie",
Aerobics_Instructor: "dcb3293f-8404-4f0f-9dc0-8a18b54c5f8f",
Abracadaver: "338802fd-44ce-41ba-9659-62a10e79457b",
Fireworks_Zombie: "37e7c15b-f476-4167-8dba-38acb11e8f82",
Disco_Tron_3000: "6937b0c6-a0c8-44e6-911d-8537f2424b64",
Disco_Naut: "Disconaut",
Moon_Base_Z: "Artillery World",
Quickdraw_Con_Man: "Four-Armed Bandit",
Barrel_of_Deadbeards: "Barrel_of_Deadbeards",
Valkyrie: "48c71740-6296-4649-b9ff-71bbb9fe9a71",
Gargantuars_Feast: "10288bf7-456f-4241-ba9c-7c1624a6cc05",
Quasar_Wizard: "Space Mentor",
Tankylosaurus: "Ankylosaurus Rider",
Headhunter: "Jungle Drummer",
Gargantuar_Throwing_Imp: "Gargantuar Throwing Imp",
Impfinity_Clone: "402b6fca-77bc-4079-9e25-bf0a25850252",
Captain_Deadbeard: "Captain_Deadbeard_from_Barrel",
Brute_Strength: "bce69fef-4a03-4e1f-822c-265efc247302",
Dance_Off: "445c8ac1-07dd-498e-9938-b30f42cec128",
Electrobolt: "c7a61f25-67ab-4586-967c-0761d88b8f7d",
Rolling_Stone: "c4e36e6b-abef-496b-9eb7-cdbc3fead0ba",
Conehead: "f1ce571d-1b77-4310-b922-91ab9c1a89c5",
Team_Mascot: "1ce967f1-eb5b-44e7-9323-c965bf421ff0",
Medic: "2a897076-e81b-4d55-ae18-aa83d0485865",
Arm_Wrestler: "c5355f21-cee7-4c06-9104-48c50f082e42",
Camel_Crossing: "49448a1e-7a8b-495f-bc27-1550a93db9ba",
Flag_Zombie: "cf645429-7b8f-40cc-8062-64f898b2014e",
Terrify: "6a0c866a-6d4f-4e3e-a034-473ad1987be7",
Trash_Can_Zombie: "7e714922-6a72-4e15-b26f-e3ef6e18cd3a",
Buckethead: "515f1709-c431-4ca8-98fa-893592c3b475",
Ra_Zombie: "8e314da9-4efb-4154-855c-d417f9118885",
Celestial_Custodian: "Space Janitor",
Sumo_Wrestler: "6a10c22c-b7a3-4756-bdfa-b5f608a58c6c",
Zombie_Coach: "48e5e486-e3e9-4d79-8f7d-60f754bd1a29",
Monster_Mash: "9c6b2087-5a6d-43fa-bc96-63f6b6d4c6eb",
Knight_of_the_Living_Dead: "b3533249-9947-4f7c-b98f-7609a5151df3",
Rodeo_Gargantuar: "d7ef14f3-ba20-4133-9015-253c4af90a8e",
Escape_through_Time: "Zombuff",
Primeval_Yeti: "Primal Yeti",
Lost_Colosseum: "Angry Colosseum",
Landscaper: "0935041d-0d31-490e-aa94-6db3d8310c02",
Weed_Spray: "945925cf-e1af-40c1-b954-b2cc5b81cede",
All_Star_Zombie: "13460c21-ad49-4b22-95f5-d1c95086c660",
Coffee_Zombie: "075d072c-ff4b-4d25-b587-089a7771cc66",
Planetary_Gladiator: "Planetary Guard",
Genetic_Experiment: "Regenerating Zombie",
Black_Hole: "Gravity Well",
Knockout: "Hand of Devastation",
Zombie_King: "70e5e94b-5b82-4648-9011-ad1182c71b48",
Undying_Pharaoh: "f2de08df-a483-4cad-b64c-c6efb337d4ec",
Wannabe_Hero: "b7c9550b-bce2-494f-af9a-1588dca7389d",
Zombot_Battlecruiser_5000: "Zombot Battlecruiser",
Stompadon: "Stegosaurus Rider",
Chum_Champion: "Glamorous Gladiator",
Heroic_Health: "dad1fd87-a967-4ec1-bd0b-4e170a0e4ce8",
Possessed: "cc450c95-a3e4-4e82-852a-ad5e414e418f",
Rock_Wall: "efc5f190-af7e-4a43-a3b1-a741b7e35347",
Imp: "02d53162-6431-4bd3-b1df-16f03d690ced",
Mini_Ninja: "fa6e4890-36d0-44fa-8b51-6315b2f0a75d",
Smoke_Bomb: "c0f45f78-f2ca-42ba-9380-41a71a61e518",
Fishy_Imp: "334d36b6-01b0-41e3-aa8a-fe0b15f5ab50",
Smelly_Zombie: "d49ce1c8-b66a-400a-84e6-4eb2acc1bd96",
Headstone_Carver: "6fd1b860-33b0-4863-bf90-d5c9beb815e1",
Zombie_Chicken: "ad8576f3-914c-44cd-8745-3d2316f3409d",
Swashbuckler_Zombie: "6e352c10-d949-411d-b018-a41eb709b033",
Backyard_Bounce: "f1e17568-3117-429a-b394-66eca8b80bda",
Stealthy_Imp: "f91f9738-5bf4-4f18-8a14-754fc18dd401",
Firefighter: "7392b9c4-7902-404c-979f-5644c86f88bb",
Swabbie: "Imp Pirate",
Monkey_Smuggler: "Monkey Trainer",
Imp_Commander: "1f60d02d-bd76-4f25-8c54-1d66808bd28a",
Barrel_Roller_Zombie: "1ec017e5-dc85-471e-9849-1f0e2a9afd1e",
Surprise_Gargantuar: "213136f7-fc61-48a5-9e81-38c6b5a91e80",
Walrus_Rider: "69cd560b-ad31-46b7-98f0-c54ad5a39b98",
Zombot_Stomp: "Trampoline Party",
Toxic_Waste_Imp: "0dcdd716-1200-4b1c-823b-5e757617620a",
Line_Dancing_Zombie: "35837e1b-5c9b-4cde-ad59-c0a0a1c077e4",
Pogo_Bouncer: "e8291675-bae3-4c68-a153-b098b8613409",
Tomb_Raiser_Zombie: "2c914186-d677-4e55-b615-54cded478d32",
Dr_Spacetime: "Dr Spacetime",
Laser_Base_Alpha: "LaserBaseAlpha",
Cursed_Gargolith: "Stone Gargantuar",
Unthawed_Viking: "Frozen Viking",
Mixed_Up_Gravedigger: "5c69080b-37fa-4a74-8d5b-584c3a46d1b8",
Zombot_Sharktronic_Sub: "2fd5c2aa-63d6-4179-b90a-d92c34203fd3",
Zombot_Plank_Walker: "ff5915de-9512-442f-98d7-ee6e90b49201",
Cryo_Yeti: "Cryo Yeti",
Raiding_Raptor: "Raptor Rider",
Captain_Flameface: "Captain_Deadbeard",
Impfinity_Clone: "402b6fca-77bc-4079-9e25-bf0a25850252",
Octo_Pet: "7dd581a3-cd7e-4266-aa3f-da38ab70be58",
Dolphinado: "8bad030b-5d21-494d-99cd-d0714d18a471",
In_Crypted: "6c867094-9813-4b61-a0f5-21575bf28114",
Super_Stench: "77088b73-fc3c-4a91-a783-0ed9be041cd0",
Ice_Moon: "Ice World",
}

const subtypes={
Mime:"Mime",
Pirate:"Pirate",
Barrel:"Barrel",
Flytrap:"Flytrap",
Dragon:"Dragon",
Banana:"Banana",
Moss:"Moss",
Corn:"Corn",
Pinecone:"Pinecone",
Seed:"Seed",
Cactus:"Cactus",
Tree:"Tree",
Clock:"Clock",
Science:"Science",
History:"History",
Root:"Root",
Flower:"Flower",
Party:"Party",
Gargantuar:"Gargantuar",
Pet:"Pet",
Imp:"Imp",
Mushroom:"Mushroom",
Leafy:"Leafy",
Berry:"Berry",
Monster:"Monster",
Mustache:"Mustache",
Peashooter:"Peashooter",
Nut:"Nut",
Bean:"Bean",
Squash:"Squash",
Sports:"Sports",
Gourmet:"Gourmet",
Dancing:"Dancing",
Proffesional:"Proffesional",
Animal:"Animal",
Fruit:"Fruit"
}

const rarities={
    DawnCommon: "Dawn_Common",
    BloomCommon: "Bloom_Common",
    BloomSuperRare: "Bloom_SuperRare",
    BloomLegendary: "Bloom_Legendary",

    ColossalUncommon: "Colossal_Uncommon",
    ColossalRare: "Colossal_Rare",
    ColossalSuperRare: "Colossal_SuperRare",
    ColossalLegendary: "Colossal_Legendary",

    GalaxyCommon: "Galaxy_Common",
    GalaxyRare: "Galaxy_Rare",
    GalaxySuperRare: "Galaxy_SuperRare",
    GalaxyLegendary: "Galaxy_Legendary",

    TriassicUncommon: "Triassic_Uncommon",
    TriassicRare: "Triassic_Rare",
    TriassicSuperRare: "Triassic_SuperRare",
    TriassicLegendary: "Triassic_Legendary",

    PremiumEvent: "Premium_Event",

    SuperpowerSuperRare: "Superpower_SuperRare",

    Token: "Token"
}

const tags={
set4:"set4",
gargantuar:"gargantuar",
randomzombiefighter:"randomzombiefighter",
caresaboutenvironment:"caresaboutenvironment",
anyaquaticplantcard:"anyaquaticplantcard",
trickortreat:"trickortreat",
leftovers:"leftovers",
plantevent:"plantevent",
not_pineclone:"not pine clone",
galaxyzombie:"galaxyzombie",
environment:"environment",
galaxyplant:"galaxyplant",
goat:"goat",
meow:"meow",
yetilunchbox:"yetilunchbox",
zombieevent:"zombieevent",
deadbeard:"deadbeard",
weeniebean:"weeniebean",
set3plant:"set3plant",
invisibility:"invisibility",
vimpire:"vimpire",
saboteur:"saboteur",
knightofthelivingdead:"knightofthelivingdead",
notplankwalker:"notplankwalker",
piratezombie:"piratezombie",
tricks:"tricks",
set3zombie:"set3zombie",
brains:"brains",
splash:"splash",
freeze:"freeze",
trick:"trick",
narrow:"narrow",
pineclone:"pineclone",
sun:"sun",
potatomine:"potatomine",
plantlegend:"plantlegend",
truestrike:"truestrike",
teamup:"teamup",
poison:"poison",
zombielegend:"zombielegend",
randomzombietrick:"randomzombietrick",
madebygardener:"madebygardener",
plantfighter6orless:"plantfighter6orless",
bad:"bad",
destroy:"destroy",
cheats:"cheats",
draw:"draw",
madebyzucchini:"madebyzucchini",
heal:"heal",
needsfighter:"needsfighter",
attack:"attack",
buff:"buff",
basicpeashooter:"basicpeashooter",
mayflower:"mayflower",
fatty:"fatty",
defense:"defense",
gravestone:"gravestone",
canbe_gravestone:"can be gravestone",
cost2_zombie:"2costzombie",
rush:"rush",
canbe_transmorgified:"can be transmogrified",
randomzombie:"randomzombie",
weenie:"weenie",
aquatic:"aquatic"
}

const buff_durations={
Permanent:"Permanent",
EndOfTurn:"EndOfTurn"
}

const terrains={
Grass:"GrassTerrain",
Highground:"HighgroundTerrain",
Water:"WaterTerrain",
}

const abilities={
Strikethrough:"Strikethrough",
Deadly:"Deadly",
Unhurtable:"Unhurtable",
CanPlayFighterInSurprisePhase:"CanPlayFighterInSurprisePhase",
Frenzy:"Frenzy",
MinHealth:"MinHealth",
Bullseye:"Truestrike",
Aquatic:"Aquatic",
Teamup:"Teamup",
GravestoneSpy:"GravestoneSpy",
NoExtraAttacks:"NoExtraAttacks",
MultiplyDamage:"MultiplyDamage",
Graveyard:"Graveyard",
Mustache:"Mustache",
Untrickable:"Untrickable",
Unhealable:"Unhealable",
AttackOverride:"AttackOverride"
}

const special_abilities={
double_strike:562,
overshoot:564, //needs a Damage value type
frenzy_buff22:615,
move_to_its_lane:668 //hot date, gravitree power
}

const comparisons={
GreaterOrEqual:"GreaterOrEqual",
LessOrEqual:"LessOrEqual",
Equal:"Equal"
}

const card_class={
Bestly:"Hungry",
Brainy:"Brainy",
Madcap:"Crazy",
Hearty:"Hearty",
Sneaky:"Sneaky",
Guardian:"Guardian",
Kabloom:"Kabloom",
Mega_Grow:"MegaGro",
Smarty:"Smarty",
Solar:"Solar"
}

//#endregion

//#region PLAYER FUNCTIONS

/**
 * Get info about block meter etc.
 * @param {string} faction 
 * @param {array} player_data 
 * @param {string} comparison 
 * @param {number} value 
 * @returns struct
 */
function player_info(faction,player_data,comparison,value)
{
var data={Faction:faction,Query:{$type:"PvZCards.Engine.Components."+player_data[0]+", EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",ComparisonOperator:comparison}}

switch(player_data[1])
{
case 0: data.Query.BlockMeterValue=value;
case 1: data.Query.SunCounterValue=value;
case 2: data.Query.TurnCount=value;
}

return val=component_make("PlayerInfoCondition",data)
}

/**
 * Block meter max value is 100
 * @param {number} value Can be negative
 * @returns struct
 */
function charge_block_meter(value)
{
return val=component_make("ChargeBlockMeterEffectDescriptor",{ChargeAmount:value})
}

//#endregion

//#region CARD FUNCTIONS

/**
 * Hides a current target into gravestone
 * @returns struct
 */
function hide_in_gravestone()
{
return val=component_make("TurnIntoGravestoneEffectDescriptor")
}

/**
 * Restricts an evoltion (Needs an evolvable component in card)
 * @param {struct} queries_check 
 * @returns struct
 */
function evolution_restriction(queries_check)
{
if (queries_check==undefined)
queries_check=[]

return val=component_make("EvolutionRestriction",{queries:queries_check})
}

/**
 * Triggers an extra attack for a target
 * @returns struct
 */
function extra_attack()
{
return val=component_make("ExtraAttackEffectDescriptor")
}

/**
 * Deals damage in selected lane
 * @param {number} damage 
 * @returns struct
 */
function attack_in_lane(damage)
{
return val=component_make("AttackInLaneEffectDescriptor",{DamageAmount:damage})
}

/**
 * Used to for example draw card and set its sun cost to -1 or set its stat to something
 * @returns struct
 */
function herald_entity()
{
return val=component_make("HeraldEntities",{ids:[0]})
}

/**
 * Changes a card cost
 * @param {number} amount 
 * @param {string} duration 
 * @returns 
 */
function change_card_cost(amount,duration)
{
return val=component_make("ModifySunCostEffectDescriptor",{SunCostAmount:amount,BuffDuration:duration})
}

/**
 * Mixes up zombies in graves
 * @returns struct
 */
function mix_up_graves()
{
return val=component_make("MixedUpGravediggerEffectDescriptor")
}

/**
 * Copies itself into selected lane with selected things
 * @param {boolean} teamup 
 * @param {boolean} gravestone 
 * @param {boolean} infront 
 * @returns struct
 */
function duplicate_card(teamup,gravestone,infront)
{
if (teamup==undefined)
teamup=false
if (gravestone==undefined)
gravestone=false
if (infront==undefined)
infront=false
return val=component_make("CopyCardEffectDescriptor",{GrantTeamup:teamup,ForceFaceDown:gravestone,CreateInFront:infront})
}

/**
 * Returns the card to the hand (bounces it)
 * @returns struct
 */
function return_to_hand()
{
return val=component_make("ReturnToHandFromPlayEffectDescriptor")
}

/**
 * Buffs the target
 * @param {number} atk 
 * @param {number} hp 
 * @param {string} duration 
 * @returns struct
 */
function buff(atk,hp,duration)
{
return val=component_make("BuffEffectDescriptor",{AttackAmount:atk,HealthAmount:hp,BuffDuration:duration})
}

/**
 * Heal's the target
 * @param {number} amount 
 * @returns struct
 */
function heal(amount)
{
return val=component_make("HealEffectDescriptor",{HealAmount:amount})
}

/**
 * shuffles x amount of specific cards
 * @param {number} guid id of the card
 * @param {number} amount
 * @returns struct
 */
function shuffle(guid,amount)
{
return val=component_make("CreateCardInDeckEffectDescriptor",{CardGuid:guid,AmountToCreate:amount,DeckPosition:"Random"})
}

/**
 * Draw x amount of cards from your deck
 * @param {number} amount 
 * @returns string
 */
function draw_card(amount)
{
return val=component_make("DrawCardEffectDescriptor",{DrawAmount:amount})
}

/**
 * Makes card persist after tranforming (keeps the abilities etc.)
 * @returns struct
 */
function persist_after_transformation()
{
return val=component_make("PersistsAfterTransform")
}

/**
 * Copies HEALTH and ATTACK of selected card and gives it to the target.
 * @returns struct
 */
function copy_stats()
{
return val=component_make("CopyStatsEffectDescriptor")
}

/**
 * spawn a card onto primary target
 * @param {number} guid id of the card
 * @param {boolean} in_grave if the card is forced to gravestone
 * @returns struct
 */
function spawn_card(guid,in_grave)
{
if (in_grave==undefined)
in_grave=false

return val=component_make("CreateCardEffectDescriptor",{CardGuid:guid,ForceFaceDown:in_grave})
}

/**
 * 
 * @returns struct
 */
function transform_cration_source()
{
return val=component_make("TransformWithCreationSource",{SourceGuid:-1})
}

/**
 * Transform into selected card
 * @param {struct} subset Selected subset query
 * @returns 
 */
function transform(subset)
{
return val=component_make("TransformIntoCardFromSubsetEffectDescriptor",{SubsetQuery:{subset}})
}

/**
 * Destroy the targetted card
 * @returns struct
 */
function destroy_card()
{
return val=component_make("DestroyCardEffectDescriptor")
}

/**
 * moves to primary target
 * @returns struct
 */
function move_card()
{
return val=component_make("MoveCardToLanesEffectDescriptor")
}

/**
 *
 * @param {string} val_type [Attack,Health]
 * @param {number} val 
 * @param {string} operation [Set,Add]
 * @param {boolean} stripnoncont
 * @returns struct
 */
function set_stat(val_type,val,operation,stripnoncont)
{
return val=component_make("SetStatEffectDescriptor",{StatType:val_type,Value:val,ModifyOperation:operation,StripNoncontinousModifiers:stripnoncont})
}

/**
 * Deal damage to selected card
 * @param {number} amount 
 * @returns struct
 */
function damage_card(amount)
{
return val=component_make("DamageEffectDescriptor",{DamageAmount:amount})
}

/**
 * INIT BEFORE REDIRECT_DAMAGE()
 * @returns struct
 */
function redirect_damage_init()
{
return val=component_make("DamageEffectRedirector")
}

/**
 * Redirects damage that player will get to THIS card (need's redirect_damage_init() first)
 * @returns struct
 */
function redirect_damage()
{
return val=component_make("DamageEffectRedirectorDescriptor")
}

/**
 * Grant a special ability to selected card
 * @param {string} type 
 * @param {string} value_type 
 * @param {number} value 
 * @returns struct
 */
function add_special_ability(type,value_type,value)
{
if (value_type==undefined)
value_type="None"
if (value==undefined)
value=0

return val=component_make("GrantTriggeredAbilityEffectDescriptor",{AbilityGuid:type,AbilityValueType:value_type,AbilityValueAmount:value})
}


/**
 * Grant's an ability for the target
 * @param {string} type 
 * @param {string} duration 
 * @param {number} value 
 * @returns 
 */
function add_ability(type,duration,value)
{
if (value==undefined)
value=0

return val=component_make("GrantAbilityEffectDescriptor",{GrantableAbilityType:type,Duration:duration,AbilityValue:value})
}

/**
 * Makes the card attack with health
 * @param {boolean} persistent 
 * @param {number} duration 
 * @returns 
 */
function attack_override(persistent,duration)
{
return val=component_make("AttackOverride",{Counters:{IsPersistent:persistent,Counters:{SourceId:-1,Duration:duration,Value:2}}})
}

/**
 * Gain sun for the targetted player
 * @param {number} value 
 * @param {string} duration 
 * @param {string} activation_time 
 * @returns struct
 */
function gain_sun(value,duration,activation_time)
{
return val=component_make("GainSunEffectDescriptor",{Amount:value,Duration:duration,ActivationTime:activation_time})
}


/**
 * Freezes the target
 * @returns struct
 */
function freeze_card()
{
return val=component_make("SlowEffectDescriptor")
}

//#endregion

//#region GENERAL FUNCTIONS

/**
 * so its always checking ?
 * @returns struct
 */
function constinous()
{
return val=component_make("Continuous")
}

/**
 * Once per game condition
 * @returns struct
 */
function once_per_game()
{
return val=component_make("OncePerGameCondition")
}

/**
 * Trigers when selected trigger is activated
 * @param {string} type 
 * @returns struct
 */
function trigger(type)
{
return val=component_make(type)
}

//#endregion

//#region QUERIES

/**
 * Checks if specific value is bigger, lower etc.
 * @param {string} comparison 
 * @param {number} value 
 * @returns 
 */
function effect_value(comparison,value)
{
return val=component_make("EffectValueCondition",{EffectValue:"TotalBuffAmount",ComparisonOperator:comparison,ValueAmount:value})
}

/**
 * Checks if the query is not true
 * @param {struct} queries_check 
 * @returns struct
 */
function is_false(queries_check)
{
if (queries_check==undefined)
queries_check={}

return val=query_make("NotQuery",{Query:queries_check})
}

/**
 * Check if lane have a matching environment
 * @param {struct} query 
 * @returns struct
 */
function lane_with_matching_environment(query)
{
return val=query_make("LaneWithMatchingEnvironmentQuery",{Query:query})
}

/**
 * Checks if the query does contain something
 * @param {struct} query 
 * @param {struct} finder 
 * @param {string} evaluation_type [Any,All] 
 * @returns 
 */
function query_conditioned(query,finder,evaluation_type)
{
if (evaluation_type==undefined)
evaluation_type="All"

return val=component_make("QueryEntityCondition",{Query:query,ConditionEvaluationType:evaluation_type,Finder:finder})
}

/**
 * Checks multiple queries
 * @param {array} queries_check
 * @returns struct
 */
function multiple_check(queries_check)
{
if (queries_check==undefined)
queries_check=[]

return val=query_make("CompositeAllQuery",{queries:queries_check})
}

/**
 * Checks mutiple queries but only one is needed to match
 * @param {array} queries_check
 * @returns struct
 */
function multiple_check_any(queries_check)
{
if (queries_check==undefined)
queries_check=[]

return val=query_make("CompositeAnyQuery",{queries:queries_check})
}

/**
 * Checks if the target has some component
 * @param {string} component_type 
 * @returns struct
 */
function has_component(cmptype)
{
return query_make("HasComponentQuery",{ComponentType:cmptype})
}

/**
 * Checks if the target doesn't have some component
 * @param {string} component_type 
 * @returns struct
 */
function lacks_component(component_type)
{
return val=query_make("LacksComponentQuery",{ComponentType:component_type})
}

/**
 * Get card by its guid
 * @param {number} guid id of the card
 * @returns struct
 */
function card_gid_query(guid)
{
return val=query_make("CardGuidQuery",{Guid:guid})
}

/**
 * Checks for queries on itself
 * @param {struct} query 
 * @returns 
 */
function self_entity_filter(query)
{
return val=component_make("SelfEntityFilter",{Query:query})
}

/**
 * Checks if it was killed by specific thing
 * @param {struct} query 
 * @returns struct
 */
function killed_by(query)
{
return val=query_make("KilledByQuery",{Query:query})
}

/**
 * Get card from subset
 * @param {string} subset 
 * @returns struct
 */
function card_subset_query(subset)
{
return val=query_make("SubsetQuery",{Subset:subset})
}

/**
 * Get card from subtype
 * @param {string} subtype 
 * @returns struct
 */
function card_subtype_query(subtype)
{
return val=query_make("SubtypeQuery",{Subtype:subtype})
}

/**
 * Check if card is on specific terrain
 * @param {string} terrain_type 
 * @returns struct
 */
function on_terrain(terrain_type)
{
return val=query_make("OnTerrainQuery",{TerrainType:terrain_type})
}

/**
 * Check if the lane is empty
 * @param {string} faction 
 * @param {boolean} is_teamup 
 * @returns 
 */
function is_empty_lane(faction,is_teamup)
{
if (faction==factions.plants)
faction="PvZCards.Engine.Components.Plants, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
else if (faction==factions.zombies)
faction="PvZCards.Engine.Components.Zombies, EngineLib, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"

return val=query_make("OpenLaneQuery",{PlayerFactionType:faction,IsForTeamupCard:is_teamup})
}

/**
 * Check the specific lane
 * @param {number} index 
 * @returns 
 */
function lane_index(index)
{
return val=query_make("LaneOfIndexQuery",{LaneIndex:index})
}

/**
 * Find the fighter on the lane
 * @param {struct} query 
 * @returns 
 */
function lane_with_matching_figter(query)
{
return val=query_make("LaneWithMatchingFighterQuery",{Query:query})
}

/**
 * Check if the target is in the same lane
 * @returns struct
 */
function is_same_lane()
{
return val=query_make("InSameLaneQuery",{OriginEntityType:"Self"})
}

/**
 * Check if the target is in the adjacent lane
 * @param {string} side 
 * @returns 
 */
function in_adjacent_lane(side)
{
if (side==undefined)
side="Either"

return val=query_make("InLaneAdjacentToLaneQuery",{Side:side})
}

//#endregion

//#region TARGETING & FILTERS

/**
 * If there are active targets
 * @returns struct
 */
function active_targets()
{
return val=component_make("ActiveTargets")
}

/**
 * Filter's the target of the trigger
 * @param {struct} queries_check 
 * @returns 
 */
function trigger_target_filter(queries_check)
{
if (queries_check==undefined)
queries_check={}

return val=component_make("TriggerTargetFilter",{Query:queries_check})
}

/**
 * Filter's the source of the trigger
 * @param {struct} queries_check 
 * @returns 
 */
function trigger_source_filter(queries_check)
{
return val=component_make("TriggerSourceFilter",{Query:queries_check})
}

/**
 * Find the primary target
 * @param {string} selection [Manual,Random,All]
 * @param {number} target_number 
 * @param {string} target_scope [All,Sorted]
 * @param {string} target_sort [None,Attack,Health]
 * @param {string} target_sort_method [None,Highest,Lowest]
 * @param {string} additional_target [None,Query]
 * @param {struct} additional_query specific query
 * @param {boolean} only_additional_query 
 * @param {struct} queries_check general query
 * @returns 
 */
function primary_target_filter(selection,target_number,target_scope,target_sort,target_sort_method,additional_target,additional_query,only_additional_query,queries_check)
{
if (selection==undefined)
selection="All"
if (target_number==undefined)
target_number=0
if (target_scope==undefined)
target_scope="All"
if (target_sort==undefined)
target_sort="None"
if (target_sort_method==undefined)
target_sort_method="None"
if (additional_query==undefined)
additional_query=null
if (only_additional_query==undefined)
only_additional_query=false
if (queries_check==undefined)
queries_check={}

return val=component_make("PrimaryTargetFilter",{SelectionType:selection,NumTargets:target_number,TargetScopeType:target_scope,TargetScopeSortValue:target_sort,TargetScopeSortMethod:target_sort_method,AdditionalTargetType:additional_target,AdditionalTargetQuery:additional_query,OnlyApplyEffectsOnAdditionalTargets:only_additional_query,Query:queries_check})

}

/**
 * Find the secondary target
 * @param {string} selection [Manual,Random,All]
 * @param {number} target_number 
 * @param {string} target_scope [All,Sorted]
 * @param {string} target_sort [None,Attack,Health]
 * @param {string} target_sort_method [None,Highest,Lowest]
 * @param {string} additional_target [None,Query]
 * @param {struct} additional_query specific query
 * @param {boolean} only_additional_query 
 * @param {struct} queries_check general query
 * @returns 
 */
function secondary_target_filter(selection,target_number,target_scope,target_sort,target_sort_method,additional_target,additional_query,only_additional_query,queries_check)
{
if (selection==undefined)
selection="All"
if (target_number==undefined)
target_number=0
if (target_scope==undefined)
target_scope="All"
if (target_sort==undefined)
target_sort="None"
if (target_sort_method==undefined)
target_sort_method="None"
if (additional_query==undefined)
additional_query=null
if (only_additional_query==undefined)
only_additional_query=false
if (queries_check==undefined)
queries_check={}

return val=component_make("SecondaryTargetFilter",{SelectionType:selection,NumTargets:target_number,TargetScopeType:target_scope,TargetScopeSortValue:target_sort,TargetScopeSortMethod:target_sort_method,AdditionalTargetType:additional_target,AdditionalTargetQuery:additional_query,OnlyApplyEffectsOnAdditionalTargets:only_additional_query,Query:queries_check})

}

//#endregion

//#region Comparators

/**
 * Compare the sun cost (to for example draw a card with +4 sun etc.)
 * @param {string} comparison 
 * @param {number} value 
 * @returns struct
 */
function sun_cost_compare(comparison,value)
{
return val=query_make("SunCostComparisonQuery",{ComparisonOperator:comparison,SunCost:value})
}

/**
 * Compare the attack
 * @param {string} comparison 
 * @param {number} value 
 * @returns struct
 */
function attack_compare(comparison,value)
{
return val=query_make("AttackComparisonQuery",{ComparisonOperator:comparison,AttackValue:value})
}

/**
 * Compare the taken damage
 * @param {string} comparison 
 * @param {number} value 
 * @returns struct
 */
function damage_taken_compare(comparison,value)
{
return val=query_make("DamageTakenComparisonQuery",{ComparisonOperator:comparison,DamageTakenValue:value})
}

/**
 * Compare the sun cost + value
 * @param {string} comparison 
 * @param {number} value 
 * @returns struct
 */
function sun_cost_plus_compare(comparison,value)
{
return val=query_make("SunCostPlusNComparisonQuery",{ComparisonOperator:comparison,AdditionalCost:value})
}

//#endregion

//#region Multipliers

/**
 * Can be used with Healing or Attacking to multiply the heal/attack by heal/attack amount
 * @param {number} type 0 - HealAmount 1 - DamageAmount
 * @param {number} value 0 - HealAmount 1 - DamageAmount
 * @returns 
 */
function effect_value(type,value)
{
const data={DestToSourceMap:{}}
const val=""

if (value==0)
val="HealAmount"
else if (value==1)
val="DamageAmount"

if (type==0)
data.DestToSourceMap.HealAmount=val
else if (type==1)
data.DestToSourceMap.DamageAmount=val

return val=component_make("EffectValueDescriptor",data)

}

/**
 * Use with buff to buff health and attack with itself (so multiply the stats by 2 for example)
 * @param {number} value 
 * @returns 
 */
function target_attackorhealth_multiplier(value)
{
return val=component_make("TargetAttackOrHealthMultiplier",{Divider:value})
}

/**
 * Can be used after buff to buff same time as query is true.
 * @param {struct} query 
 * @param {number} value 
 */
function query_multiplier(query,value)
{
if (value==undefined)
value=1

return val=component_make("QueryMultiplier",{Query:query,Divider:value})
}

/**
 * Can be used after damage to damage same time as health value
 * @param {number} value 
 */
function target_health_multiplier(value)
{
return val=component_make("TargetHealthMultiplier",{Divider:value})
}

/**
 * Can be used after buff to buff same time as attack value
 * @param {number} value 
 */
function target_attack_multiplier(value)
{
return val=component_make("TargetAttackMultiplier",{Divider:value})
}

/**
 * Can be used after buff to buff same time as sun amount.
 * @param {string} faction 
 * @param {number} value 
 * @returns 
 */
function sun_gain_multiplier(faction,value)
{
if (value==undefined)
value=1

return val=component_make("SunGainedMultiplier",{Faction:faction,Divider:value})
}

/**
 * Can be used after buff to buff same time as hero health amount.
 * @param {string} faction 
 * @param {number} value 
 * @returns 
 */
function hero_health_multiplier(faction,value)
{
if (value==undefined)
value=1

return val=component_make("HeroHealthMultiplier",{Faction:faction,Divider:value})
}

/**
 * Repeat some action by draw'n card's cost
 * @param {number} value 
 * @returns 
 */
function drawncard_cost_multiplier(value)
{
return val=component_make("DrawnCardCostMultiplier",{Divider:value})
}

//#endregion

//#region Card Create functions

function get_real_cardtype(typo)
{
    switch(typo)
    {
    case "Plant": return "Base";
    case "Plant-Trick": return "BasePlantOneTimeEffect";
    case "Plant-Hero-Trick": return "BasePlantOneTimeEffect";
    case "Plant-Environment": return "BasePlantEnvironment ";
    case "Zombie": return "BaseZombie";
    case "Zombie-Trick": return "BaseZombieOneTimeEffect ";
    case "Zombie-Hero-Trick": return "BaseZombieOneTimeEffect";
    case "Zombie-Environment": return "BaseZombieEnvironment "; 
    }
}

function get_subtype_num(typo)
{
    switch(typo){
    case "Sports": return 6;
    case "Dancing": return 8;
    case "Professional": return 37;
    case "Imp": return 9;
    case "Pirate": return 12;
    case "Barrel": return 20;
    case "Mustache": return 15;
    case "History": return 19;
    case "Monster": return 39;
    case "Science": return 7;
    case "Pet": return 10;
    case "Root": return 31;
    case "Mushroom": return 4;
    case "Flower": return 3;
    case "Flytrap": return 26;
    case "Seed": return 21;
    case "Fruit": return 27;
    case "Bean": return 2;
    case "Leafy": return 28;
    case "Tree": return 33;
    case "Corn": return 24;
    case "Peashooter": return 0;
    case "Squash": return 32;
    case "Nut": return 5;
    case "Party": return 16;
    case "Gourmet": return 18;
    case "Gargantuar": return 11;
    case "Berry": return 1;
    case "Animal": return 22;
    case "Cactus": return 23;
    case "Banana": return 40;
    case "Moss": return 29;
    case "Pinecone": return 13;
    case "Dragon": return 25;
    case "Mime": return 41;
    case "Clock": return 35;
    }
}

/**
 * 
 * @param {array} subtype_affinities 
 * @param {array} subtype_aff_weights 
 * @param {array} tag_affinities 
 * @param {array} tag_aff_weights 
 * @param {array} card_affinities
 * @param {array} card_affinity_weights
 * @returns 
 */
function create_ai_info(subafflist=[],subaffwei=[],tagafflist=[],taffwei=[],cardf=[],cardfw=[]){
    return {
        sub_aff:subafflist,
        sub_aff_wei:subaffwei,
        tag_aff:tagafflist,
        tag_aff_wei:taffwei,
        card_aff:cardf,
        card_aff_wei:cardfw
    }
}

/**
 * 
 * @param {array} armor [ bool,number ]
 * @param {boolean} untric 
 * @param {boolean} deadly 
 * @param {boolean} frenzy 
 * @param {boolean} alllanes_atk 
 * @param {boolean} strikethrough 
 * @param {array} splash_dmg [ bool,dmg ]
 * @param {boolean} adjacent_lanes 
 * @param {boolean} tripleshot 
 * @param {array} overshoot [ bool,dmg ]
 * @param {boolean} doublestrike 
 * @param {boolean} antihero [ bool,dmg,life ]
 * @param {boolean} bullseye
 * @param {boolean} hunt
 * @returns {struct}
 */
function create_ability_list(armor,untric=false,deadly=false,frenzy=false,alllanes_atk=false,strikethrough=false,splash_dmg=undefined,adjacent_lanes=false,tripleshot=false,overshoot=undefined,doublestrike=false,antihero=false,bullseye=false,hunt=false){

    al=[]
    amn=[]
    sal=[]
    sti=[]
    
    if (armor!=undefined){
        al.push("armor")
        amn.push(armor[1])
        sal.push("Armor")
        sti.push("NONE")
    }
    
    if (untric!=false){
        al.push("untirck")
        amn.push("NONE")
        sal.push("Untrickable")
        sti.push("NONE")
    }
    
    if (deadly!=false){
        al.push("deadly")
    
        amn.push("NONE")
        sal.push("Deadly")
        sti.push("NONE")
    }
    
    if (frenzy!=false){
        al.push("frenzy")
    
        amn.push("NONE")
        sal.push("Frenzy")
        sti.push("NONE")
    }
    
    if (alllanes_atk!=false){
        al.push("alllanes")
    
        amn.push("NONE")
        sal.push("Unique")
        sti.push("NONE")
    }
    
    if (strikethrough!=false){
        al.push("strikethrough")
    
        amn.push("NONE")
        sal.push("Strikethrough")
        sti.push("NONE")
    }
    
    if (splash_dmg!=undefined){
        al.push("splash")
    
        amn.push(splash_dmg[1])
        sal.push("Unique")
        sti.push("NONE")
    }
    
    if (adjacent_lanes!=false){
        al.push("adjacentlanes")
    
        amn.push("NONE")
        sal.push("Unique")
        sti.push("NONE")
    }
    
    if (tripleshot!=false){
        al.push("tripleshot")
    
        amn.push("NONE")
        sal.push("Unique")
        sti.push("NONE")
    }
    
    if (overshoot!=undefined){
        al.push("overshoot")
    
        amn.push(overshoot[1])
        sal.push("Overshoot")
        sti.push(12)
    }
    
    if (doublestrike!=false){
        al.push("doubleatk")
    
        amn.push("NONE")
        sal.push("Unique")
        sti.push(11)
    }
    
    if (antihero!=false){
        al.push("antihero")
    
        amn.push([antihero[1],antihero[2]])
        sal.push("Ambush")
        sti.push(9)
    }
    
    if (bullseye!=false){
        al.push("bullseye")
    
        amn.push("NONE")
        sal.push("Truestrike")
        sti.push("NONE")
    }
    
    if (hunt!=false){ //depends if its plant or zombie how the code will look !!!
        al.push("hunt")
    
        amn.push("NONE")
        sal.push("Unique")
        sti.push(13)
    }
    
    return {
        ability_list: al,
        amount: amn,
        spec_ability_list: sal, //only for the special_abilities value
        show_trig_icon: sti
    }
    
}

/**
 * 
 * @param {string} prefab
 * @param {string} card_type card type
 * @param {number} guid card id (new will start at 692)
 * @param {struct} stats {hp:1,dg:1,ct:1}
 * @param {string} rarity
 * @param {array} subtypes
 * @param {array} tags
 * @param {string} cardclass
 * @param {struct} ai_info
 * @param {boolean} teamup
 * @param {boolean} aquatic
 * @param {boolean} grave
 * @param {boolean} infront
 * @param {struct} abilities_list use create_ability_list
 */
function create_card_base(prefab,ctype,guid,stats,rarity,csubt=[],ctag=[],cardclass=card_class.Bestly,ai_info,teamup=false,aquatic=false,grave=false,infront=false,abilities_list=undefined){

    var current_effect_entities_descriptor=undefined

    val_card = {
        entity:{ components:[] },
        prefabName: prefab,
        baseId:"", //V
        color:cardclass, //V
        set:"", //V
        rarity:0, //V
        setAndRarityKey:rarity, //V
        displayHealth:stats.hp, //V
        displayAttack:stats.dg, //V
        displaySunCost:stats.ct, //V
        faction:"", //V
        ignoreDeckLimit:false, //V
        isPower:false, //V
        isPrimaryPower:false, //V
        isFighter:false, //V
        isEnv:false, //V
        isAquatic:aquatic, //V
        isTeamup:teamup, //V
        subtypes:csubt, //V
        tags:ctag, //V
        subtype_affinities:[], //V
        subtype_affinity_weights:[], //V
        tag_affinities:[], //V
        tag_affinity_weights:[], //V
        card_affinities:[], //V
        card_affinity_weights:[], //V
        usable:true, //V
        special_abilities:[]
    }

    //#region card type
    switch(ctype){
        case cardtype.Plant: 
        val_card.isFighter=true
        val_card.faction="Plants"
        val_card.entity.components.push(component_make("Plants"))
        break;
        case cardtype.PlantTrick:
        val_card.isPower=true
        val_card.faction="Plants"
        val_card.entity.components.push(component_make("Plants"))
        break;
        case cardtype.PlantEnvironment:
        val_card.isEnv=true
        val_card.faction="Plants"
        val_card.entity.components.push(component_make("Plants"))
        break;
        case cardtype.PlantHeroTrick:
        val_card.isPrimaryPower=true
        val_card.isPower=true
        val_card.faction="Plants"
        val_card.entity.components.push(component_make("Plants"))
        break;
        case cardtype.Zombie: 
        val_card.isFighter=true
        val_card.faction="Zombies"
        val_card.entity.components.push(component_make("Zombies"))
        break;
        case cardtype.ZombieTrick:
        val_card.isPower=true
        val_card.faction="Zombies"
        val_card.entity.components.push(component_make("Zombies"))
        break;
        case cardtype.ZombieEnvironment:
        val_card.isEnv=true
        val_card.faction="Zombies"
        val_card.entity.components.push(component_make("Zombies"))
        break;
        case cardtype.ZombieHeroTrick:
        val_card.isPrimaryPower=true
        val_card.isPower=true
        val_card.faction="Zombies"
        val_card.entity.components.push(component_make("Zombies"))
        break;
    }
    //#endregion

    if (abilities_list!=undefined){
        if (abilities_list.ability_list.length>0){

            var trigger_icon_found=[]
            for (let abindex = 0; abindex < abilities_list.ability_list.length; abindex++) {
                
                let current_ab_name=abilities_list.ability_list[abindex]
                let current_trigger_icon=abilities_list.show_trig_icon[abindex]
                let current_ab_amount=abilities_list.amount[abindex]
                let current_specab=abilities_list.spec_ability_list[abindex]
                
                let grantedtriggerabilies = []
                let is_plant = 1
                if (val_card.faction=="Zombies")
                is_plant=0


                switch(current_ab_name){
                    case "overshoot":
                        ggrantedtriggerabilies.push({g:564,vt:is_plant,va:current_ab_amount})
                    break;
                    case "armor":
                        val_card.entity.components.push(component_make("Armor",{ArmorAmount:{BaseValue:current_ab_amount}}))
                    break;
                    case "untrick":
                        val_card.entity.components.push(component_make("Untrickable",{IsPersistent:true,Counters:[{SourceId:-1,Duration:0,Value:0}]}))
                    break;
                    case "deadly":
                        val_card.entity.components.push(component_make("Deadly",{IsPersistent:true,Counters:[{SourceId:-1,Duration:0,Value:0}]}))
                    break;
                    case  "frenzy":
                        val_card.entity.components.push(component_make("Frenzy",{IsPersistent:true,Counters:[{SourceId:-1,Duration:0,Value:0}]}))
                    break;
                    case "alllanes":
                        val_card.entity.components.push(component_make("AttackInAllLanes",{}))
                    break;
                    case "strikethrough":
                        val_card.entity.components.push(component_make("Strikethrough",{IsPersistent:true,Counters:[{SourceId:-1,Duration:0,Value:0}]}))
                    break;
                    case "splash":
                        val_card.entity.components.push(component_make("SplashDamage",{DamageAmount:current_ab_amount}))
                        if (!val_card.tags.includes(tags.splash))
                            val_card.tags.push(tags.splash)   
                    break;
                    case "adjacentlanes":
                        val_card.entity.components.push(component_make("AttacksOnlyInAdjacentLanes",{}))
                    break;
                    case "tripleshot":
                        val_card.entity.components.push(component_make("Multishot",{}))
                        if (!val_card.tags.includes(tags.splash))
                            val_card.tags.push(tags.splash)   
                    break;
                    case "doubleatk":
                        grantedtriggerabilies.push({g:562,vt:0,va:0})
                    break;
                    case "hunt":
                        if (current_effect_entities_descriptor==undefined){
                        val_card.entity.components.push(component_make("EffectEntitiesDescriptor",{entities:[]}))
                        current_effect_entities_descriptor = val_card.entity.components.length
                        }
                        
                        let ceff = val_card.entity.components[current_effect_entities_descriptor-1].$data.entities

                        if (is_plant==false)
                        ceff.push(
                            {
                                components:
                                [
                                effect_group(0),
                                trigger(triggers.Play),
                                trigger_target_filter( multiple_check( has_component(components.Plants),query_make(simple_queries.TargetableInPlayFighter) ) ),
                                self_entity_filter( multiple_check( query_make(simple_queries.WillTriggerEffects), query_make(simple_queries.IsAlive) ) ),
                                primary_target_filter( "All", 0, "All", "None", "None", "None", null, false, query_make(simple_queries.Self) ),
                                move_card(),
                                secondary_target_filter( "All", 0, "All", "None", "None", "None", null, false, query_make(simple_queries.SameLanseAsTarget) )
                                ]
                            }
                        )
                        else
                        ceff.push(
                            {
                                components:
                                [
                                effect_group(0),
                                trigger(triggers.Play),
                                trigger_target_filter( multiple_check( has_component(components.Zombies),query_make(simple_queries.TargetableInPlayFighter) ) ),
                                self_entity_filter( multiple_check( query_make(simple_queries.WillTriggerEffects), query_make(simple_queries.IsAlive) ) ),
                                primary_target_filter( "All", 0, "All", "None", "None", "None", null, false, query_make(simple_queries.Self) ),
                                move_card(),
                                secondary_target_filter( "All", 0, "All", "None", "None", "None", null, false, query_make(simple_queries.SameLanseAsTarget) )
                                ]
                            }
                        )
                    break;
                    case "bullseye":
                        val_card.entity.components.push(component_make("Truestrike",{IsPersistent:true,Counters:[{SourceId:-1,Duration:0,Value:0}]}))
                    break;
                    case "antihero":
                        if (current_effect_entities_descriptor==undefined){
                            val_card.entity.components.push(component_make("EffectEntitiesDescriptor",{entities:[]}))
                            current_effect_entities_descriptor = val_card.entity.components.length
                            }
                            
                            let ceff1 = val_card.entity.components[current_effect_entities_descriptor-1].$data.entities
    

                            ceff1.push(
                                {
                                    components:
                                    [
                                    self_entity_filter( multiple_check( query_make(simple_queries.UnopposedLane),query_make(simple_queries.WillTriggerEffects),query_make(simple_queries.IsAlive) ) ),
                                    constinous(),
                                    active_targets(),
                                    primary_target_filter( "All", 0, "All", "None", "None", "None", null, false, query_make(simple_queries.Self) ),
                                    buff(current_ab_amount[0],current_ab_amount[1],buff_durations.Permanent)
                                    ]
                                }
                            )

                    break;
                }

                if (grantedtriggerabilies.length>0){
                    val_card.entity.components.push(component_make("GrantedTriggeredAbilities",{a:grantedtriggerabilies}))
                }

                if (current_trigger_icon!="NONE"){
                    trigger_icon_found.push(current_trigger_icon)
                }

                //console.log(current_ab_name)
                //console.log(current_ab_amount)
                //console.log(current_specab)
                //console.log("---")
                
                if (current_specab!="NONE" && !val_card.special_abilities.includes(current_specab)){
                    val_card.special_abilities.push(current_specab)
                }
                /*
                ability_list: al,
                amount: amn,
                spec_ability_list: sal, //only for the special_abilities value
                show_trig_icon: sti
                */

            }

            if (trigger_icon_found.length>0){
                val_card.entity.components.push(component_make("ShowTriggeredIcon",{abilities:trigger_icon_found}))
            }

        }
    }

    //#region some abilities
    if (aquatic==true){
        if (!val_card.tags.includes(tags.aquatic))
        val_card.tags.push(tags.aquatic)
        val_card.entity.components.push(component_make("Aquatic",{Counters:{IsPersistent:false,Counters:[{SourceId:-1,Duration:0,Value:0}]}}))
    }
    if (teamup==true){
        if (!val_card.tags.includes(tags.teamup))
        val_card.tags.push(tags.teamup)
        val_card.entity.components.push(component_make("Teamup",{Counters:{IsPersistent:false,Counters:[{SourceId:-1,Duration:0,Value:0}]}}))
    }
    if (grave==true){
        if (!val_card.tags.includes(tags.gravestone))
        val_card.tags.push(tags.gravestone)
        val_card.entity.components.push(component_make("PlaysFaceDown",{}))
    }
    if (infront==true){
        val_card.entity.components.push(component_make("CreateInFront",{}))
    }
    //#endregion
    
    //#region ai_info
    if (ai_info!=undefined){
    val_card.subtype_affinities=ai_info.sub_aff
    val_card.subtype_affinity_weights=ai_info.sub_aff_wei
    val_card.tag_affinities=ai_info.tag_aff
    val_card.tag_affinity_weights=ai_info.tag_aff_weights
    val_card.card_affinities=ai_info.card_aff
    val_card.card_affinity_weights=ai_info.card_aff_wei
    }
    //#endregion

    //#region basic_stats
    val_card.baseId=get_real_cardtype(ctype)

    val_card.entity.components.push(component_make("Card",{Guid:guid}))
    val_card.entity.components.push(component_make("SunCost",{SunCostValue:{ BaseValue:stats.ct }}))
    val_card.entity.components.push(component_make("Health",{MaxHealth:{BaseValue:stats.hp},CurrentDamage:0}))
    val_card.entity.components.push(component_make("Attack",{AttackValue:{BaseValue:stats.dg}}))


    if (val_card.isPower==true)
        val_card.entity.components.push(component_make("Superpower",{}))

    if (val_card.isEnv==true)
        val_card.entity.components.push(component_make("Environment",{}))
    //#endregion

    //#region rarities, sets, costs
    var rar="R0"
    var rar_num_=0
    var set_="Silver"
    var buy_cost=0
    var sell_cost=0
    switch(rarity)
    {
    case "Dawn_Common": 
    rar="R0"
    rar_num_=0
    set_="Silver"
    buy_cost=25
    break;
    case "Bloom_Common": 
    rar="R1"
    rar_num_=0
    set_="Gold"
    buy_cost=50
    sell_cost=15
    break;
    case "Bloom_Rare": 
    rar="R2"
    rar_num_=1
    set_="Gold"
    buy_cost=250
    sell_cost=50
    break;
    case "Bloom_SuperRare": 
    rar="R3"
    rar_num_=2
    set_="Gold"
    buy_cost=1000
    sell_cost=250
    break;
    case "Bloom_Legendary": 
    rar="R4"
    rar_num_=3
    set_="Gold"
    buy_cost=4000
    sell_cost=1000
    break;

    case "Colossal_Uncommon": 
    rar="R1"
    rar_num_=0
    set_="Set3"
    buy_cost=50
    sell_cost=15
    break;
    case "Colossal_Rare": 
    rar="R2"
    rar_num_=1
    set_="Set3"
    buy_cost=250
    sell_cost=50
    break;
    case "Colossal_SuperRare": 
    rar="R3"
    rar_num_=2
    set_="Set3"
    buy_cost=1000
    sell_cost=250
    break;
    case "Colossal_Legendary": 
    rar="R4"
    rar_num_=3
    set_="Set3"
    buy_cost=4000
    sell_cost=1000
    break;

    case "Galaxy_Common": 
    rar="R1"
    rar_num_=0
    set_="Set2"
    buy_cost=50
    sell_cost=15
    break;
    case "Galaxy_Rare": 
    rar="R2"
    rar_num_=1
    set_="Set2"
    buy_cost=250
    sell_cost=50
    break;
    case "Galaxy_SuperRare": 
    rar="R3"
    rar_num_=2
    set_="Set2"
    buy_cost=1000
    sell_cost=250
    break;
    case "Galaxy_Legendary": 
    rar="R4"
    rar_num_=3
    set_="Set2"
    buy_cost=4000
    sell_cost=1000
    break;

    case "Triassic_Uncommon": 
    rar="R1"
    rar_num_=0
    set_="Set4"
    buy_cost=50
    sell_cost=15
    break;
    case "Triassic_Rare": 
    rar="R2"
    rar_num_=1
    set_="Set4"
    buy_cost=250
    sell_cost=50
    break;
    case "Triassic_SuperRare": 
    rar="R3"
    rar_num_=2
    set_="Set4"
    buy_cost=1000
    sell_cost=250
    break;
    case "Triassic_Legendary": 
    rar="R4"
    rar_num_=3
    set_="Set4"
    buy_cost=4000
    sell_cost=1000
    break;

    case "Premium_Event": 
    rar="Event"
    rar_num_=5
    set_="Event"
    buy_cost=1000
    sell_cost=250
    break;
    case "Superpower_SuperRare": 
    rar="R3"
    rar_num_=2
    set_="Superpower"
    break;
    
    case "Token": 
    rar="R0"
    rar_num_=4
    break;
    }

    //if its hero power then its set is Hero
    if (val_card.isPrimaryPower==true)
    set_="Hero"
    //

    if (buy_cost!=0)
    val_card.craftingBuy=buy_cost

    if (sell_cost!=0)
    val_card.craftingSell=sell_cost

    val_card.entity.components.push(component_make("Rarity",{Value:rar}))
    val_card.rarity=rar_num_
    val_card.set=set_
    //#endregion

    //#region some tags,subtypes

    if (val_card.set=="Set3" && val_card.faction=="Plants" && !val_card.tags.includes(tags.set3plant))
        val_card.tags.push(tags.set3plant)
    if (val_card.set=="Set3" && val_card.faction=="Zombies" && !val_card.tags.includes(tags.set3zombie))
        val_card.tags.push(tags.set3zombie)

    if (rar=="R4" && val_card.faction=="Plants" && !val_card.tags.includes(tags.plantlegend))
        val_card.tags.push(tags.plantlegend)
    if (rar=="R4" && val_card.faction=="Zombies" && !val_card.tags.includes(tags.zombielegend))
        val_card.tags.push(tags.zombielegend)

    if (stats.ct==2 && val_card.faction=="Zombies" && !val_card.tags.includes(tags.cost2_zombie))
        val_card.tags.push(tags.cost2_zombie)

    if (val_card.set=="Set2" && val_card.faction=="Plants" && !val_card.tags.includes(tags.galaxyplant))
        val_card.tags.push(tags.galaxyplant)
    if (val_card.set=="Set2" && val_card.faction=="Zombies" && !val_card.tags.includes(tags.galaxyzombie))
        val_card.tags.push(tags.galaxyzombie)    

    if (val_card.set=="Event" && val_card.faction=="Plants" && !val_card.tags.includes(tags.plantevent))
        val_card.tags.push(tags.plantevent)
    if (val_card.set=="Event" && val_card.faction=="Zombies" && !val_card.tags.includes(tags.zombieevent))
        val_card.tags.push(tags.zombieevent)   

    if (grave==true && val_card.faction=="Zombies" && !val_card.tags.includes(tags.canbe_gravestone))
        val_card.tags.push(tags.canbe_gravestone)   

    if (val_card.set=="Set4" && !val_card.tags.includes(tags.set4))
        val_card.tags.push(tags.set4)


    if (val_card.isPower==true && !val_card.tags.includes(tags.trick))
        val_card.tags.push(tags.trick)
    if (val_card.isEnv==true && !val_card.tags.includes(tags.environment))
        val_card.tags.push(tags.environment)


    if (rarity==rarities.PremiumEvent && val_card.faction=="Plants" && !val_card.tags.includes(tags.plantevent))
        val_card.tags.push(tags.plantevent)
    if (rarity==rarities.PremiumEvent && val_card.faction=="Zombies" && !val_card.tags.includes(tags.zombieevent))
        val_card.tags.push(tags.zombieevent)

    if (rarity==rarities.GalaxyCommon || rarity==rarities.GalaxyRare || rarity==rarities.GalaxySuperRare || rarity==rarities.GalaxyLegendary){
            if (val_card.faction=="Plants" && !val_card.tags.includes(tags.galaxyplant))
        val_card.tags.push(tags.galaxyplant)
            if (val_card.faction=="Zombies" && !val_card.tags.includes(tags.galaxyzombie))
        val_card.tags.push(tags.galaxyzombie)
    }



    if (csubt.length>0){
        var c_subtypes_list=[]
        for (let index = 0; index < csubt.length; index++) {
            c_subtypes_list[index]=get_subtype_num(csubt[index])
        }

        val_card.entity.components.push(component_make("Subtypes",{subtypes:c_subtypes_list}))
    }

    if (ctag.length>0){
        val_card.entity.components.push(component_make("Tags",{tags:ctag}))
    }
    //#endregion

    return [ val_card , current_effect_entities_descriptor ]

}

/**
 * It will return effect entities descriptor or create it and return it
 * @param {struct} card_ 
 */
function check_for_effect_entities_descriptor(card_){
    if (card_[1]!=undefined)
        return card_[0].entity.components[card_[1]-1].$data.entities
    else{
        let c_pos=card_[0].entity.components.push(component_make("EffectEntitiesDescriptor",{entities:[]}))
        return card_[0].entity.components[c_pos-1].$data.entities
    }
}

//#endregion

//#region Guacodile
var cbase_1=create_card_base(
    card_prefab.Guacodile,
    cardtype.Plant,
    1,
    {hp:3,dg:4,ct:4},
    rarities.BloomSuperRare,
    [subtypes.Fruit,subtypes.Animal],
    [tags.destroy],
    card_class.Guardian,
    create_ai_info([],[],[],[],[8,462],[1.2,1.2]),
    false,
    true,
    false,
    false,
    create_ability_list(undefined,false,false,false,false,false,undefined,false,false,undefined,false,false,false,false)
)

let current_effect=check_for_effect_entities_descriptor(cbase_1)

current_effect.push(
    {
    components:[
        effect_group(0),
        trigger(triggers.DiscardFromPlay),
        trigger_target_filter( multiple_check( [query_make(simple_queries.Self),query_make(simple_queries.TriggerOnDeath)] ) ),
        primary_target_filter( "All",0,"All","None","None","None",null,false,multiple_check( [is_same_lane(),query_make(simple_queries.IsAlive),query_make(simple_queries.TargetableInPlayFighter),has_component(components.Zombies)] ) ),
        damage_card(4)
    ]
    }

)
//#endregion

//#region Chimney Sweep
var cbase_2=create_card_base(
    card_prefab.Chimney_Sweep,
    cardtype.Zombie,
    2,
    {hp:1,dg:2,ct:1},
    rarities.BloomCommon,
    [subtypes.Proffesional],
    [tags.weenie,tags.rush],
    card_class.Brainy,
    create_ai_info([],[],[],[],[],[]),
    false,
    false,
    false,
    false,
    create_ability_list(undefined,false,false,false,false,false,undefined,false,false,undefined,false,false,false,false)
)

current_effect=check_for_effect_entities_descriptor(cbase_2)

current_effect.push(
    {
    components:[
        effect_group(0),
        trigger(triggers.Play),
        trigger_target_filter( multiple_check( query_make(simple_queries.Self), on_terrain(terrains.Highground), query_make(simple_queries.WillTriggerEffects), query_make(simple_queries.IsAlive) ) ),
        primary_target_filter( "All",0,"All","None","None","None",null,false,multiple_check( query_make(simple_queries.Self) ) ),
        buff(1,1,buff_durations.Permanent)
    ]
    }

)
//#endregion

//when you play a card and this card is in hand
//it will buff random plant
/*
current_effect.push(
    {
    components:[
    effect_group(0),
    trigger(triggers.Play), 
    self_entity_filter(query_make(simple_queries.InHand)),
    trigger_target_filter( multiple_check( [has_component(components.Plants),query_make(simple_queries.TargetableInPlayFighter)] ) ),
    primary_target_filter( "Random",1,"All","None","None","None",null,false, multiple_check( [has_component(components.Plants),query_make(simple_queries.TargetableInPlayFighter)] ) ),
    buff( 1,1,buff_durations.Permanent )
    ]
    
    }

)
*/

ret={ 1:cbase_1[0],2:cbase_2[0] }
document.getElementById("resoult").innerHTML= JSON.stringify(ret,undefined,3)

