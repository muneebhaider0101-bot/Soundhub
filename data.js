/**
 * SoundHub Data Source
 * Includes Audio, Images, and Genre Information
 */

const IMG_POOL = [
    'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&q=80',
    'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&q=80',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80',
    'https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=500&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80',
    'https://images.unsplash.com/photo-1459749411177-287ce3274392?w=500&q=80',
    'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&q=80',
];

const GENRE_ARTISTS = {
    pop: [
        {
            name: "Taylor Swift",
            link: "https://music.apple.com/us/artist/taylor-swift/159260351?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Cruel Summer", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/96/61/ff/9661ff73-0d57-582a-5e57-5687abb33313/mzaf_15246628164161261055.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg" },
                { title: "Shake It Off", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5e/10/7c/5e107c9b-5fe8-581a-5ea4-717903781d94/mzaf_13937309032449903025.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/09/01/16/090116af-770e-23da-21a9-6bd30782eda5/00843930013562.rgb.jpg/600x600bb.jpg" },
                { title: "You Belong With Me", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d4/2f/90/d42f9068-510c-b84d-4a88-4db0bda8b33d/mzaf_11067083354470849837.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/59/dc/cb/59dccbb0-73f9-701e-7b5b-58c902ddfe68/09UMDIM00338.rgb.jpg/600x600bb.jpg" },
                { title: "Love Story", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/01/b2/d3/01b2d3f4-d1ea-0a9e-3090-e6d609b33691/mzaf_17152798784953812339.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/59/dc/cb/59dccbb0-73f9-701e-7b5b-58c902ddfe68/09UMDIM00338.rgb.jpg/600x600bb.jpg" },
                { title: "Blank Space", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/57/dc/f4/57dcf476-1af6-3706-c0b4-aa2d97c702ce/mzaf_509502127790931850.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/09/01/16/090116af-770e-23da-21a9-6bd30782eda5/00843930013562.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "The Weeknd",
            link: "https://music.apple.com/us/artist/the-weeknd/479756766?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/aa/b4/2aaab42a-a4cb-a600-4a25-d78961495960/18UMGIM17204.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Call Out My Name", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/97/64/46/97644689-c216-a0f6-e0b8-fb28e4c29386/mzaf_13065292673725241118.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/aa/b4/2aaab42a-a4cb-a600-4a25-d78961495960/18UMGIM17204.rgb.jpg/600x600bb.jpg" },
                { title: "Blinding Lights", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d6/87/41/d687410c-4714-af1d-e055-3296d4777226/mzaf_16921438337215363475.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg" },
                { title: "Die For You", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/02/24/b2/0224b209-df06-fd41-b0a4-568c155a1d5f/mzaf_4602401127946019832.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/600x600bb.jpg" },
                { title: "One Of The Girls", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/18/44/de/1844de8a-6eba-7abf-c7ec-06be519c3543/mzaf_9928704299305691030.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/db/28/e7/db28e7c3-f53a-76c8-eaa4-d92a22e4f160/23UMGIM72115.rgb.jpg/600x600bb.jpg" },
                { title: "I Feel It Coming (feat. Daft Punk)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/92/71/f5/9271f520-7386-92ec-e149-ea929ccb692e/mzaf_3000184026241900741.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/61/f8/e261f8c1-73db-9a7a-c89e-1068f19970e0/16UMGIM67863.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Dua Lipa",
            link: "https://music.apple.com/us/artist/dua-lipa/1031397873?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg",
            songs: [
                { title: "Levitating", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/50/fb/2a/50fb2a1f-fa8f-fd33-893c-52502dc4573f/mzaf_5452381426075756565.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg" },
                { title: "New Rules", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/40/31/f84031f6-6bf3-1e5e-0c32-5a74a6e28713/mzaf_9544069115810838117.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c1/54/2d/c1542d45-c6c2-12ca-7308-6eacd762c562/190295807870.jpg/600x600bb.jpg" },
                { title: "Dance The Night", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/1b/08/f81b08c2-dd58-8297-3ba3-203da184ca17/mzaf_9024785579572527117.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c0/54/97/c05497aa-c19f-bf4f-de29-71edf30fbefb/075679688767.jpg/600x600bb.jpg" },
                { title: "Don't Start Now", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/01/55/e1/0155e17e-3b4e-734d-126d-7c68855334c4/mzaf_2030735604941408363.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/ee/66/41ee66fa-f8dd-7e82-155a-3a1b360dc562/190295322175.jpg/600x600bb.jpg" },
                { title: "Houdini", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/0c/e0/2a0ce04a-4155-72a3-ba8f-e0344f49536d/mzaf_17581444001185566790.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/dd/af/ea/ddafeab5-797a-5b6f-7735-f96c537b45e0/5054197894091.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Harry Styles",
            link: "https://music.apple.com/us/artist/harry-styles/471260289?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
            songs: [
                { title: "As It Was", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5c/3e/35/5c3e3567-cb65-696e-ac12-1b6a70338fb4/mzaf_16996107027988577832.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg" },
                { title: "Sign of the Times", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/19/f7/99/19f799a3-4638-f354-8713-f5ac076f328e/mzaf_2398941441794619302.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg" },
                { title: "Watermelon Sugar", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/16/86/f5/1686f50d-8b77-7e32-85f7-5f0e804d68fe/mzaf_14195633304344507287.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg" },
                { title: "Adore You", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/59/1f/1b591fec-7157-f069-02fd-46a77c8638af/mzaf_2481090751237982049.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg" },
                { title: "Falling", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e2/82/28/e28228b8-4440-b6a8-d82d-4e9eba8fc882/mzaf_10293739487732546000.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Ariana Grande",
            link: "https://music.apple.com/us/artist/john-powell/61088593?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/0a/7e/0f0a7e34-1aa9-93bd-5def-7cc73d987112/25UM1IM97282.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "A Wicked Good Finale (feat. Ariana Grande, Cynthia Erivo & Wicked Movie Cast)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/4e/12/c94e124f-a763-18b6-34e0-9743650b7fc1/mzaf_1441736176557412726.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0f/0a/7e/0f0a7e34-1aa9-93bd-5def-7cc73d987112/25UM1IM97282.rgb.jpg/600x600bb.jpg" },
                { title: "I'm Not That Girl (Reprise)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/93/6c/e3936c8f-f073-9b07-e2e8-deb111280f37/mzaf_9380328940290255691.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/77/90/e87790f8-1dd6-d64b-3d5d-6083552aca7f/25UM1IM45249.rgb.jpg/600x600bb.jpg" },
                { title: "The Girl in the Bubble", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/01/41/c8/0141c8c8-a36b-b604-bea7-ce8ced720a87/mzaf_1967384462643308440.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/77/90/e87790f8-1dd6-d64b-3d5d-6083552aca7f/25UM1IM45249.rgb.jpg/600x600bb.jpg" },
                { title: "For Good", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/42/4b/6d/424b6dd4-1d3e-61af-97e9-66bad6f401cc/mzaf_2255253215064630388.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/77/90/e87790f8-1dd6-d64b-3d5d-6083552aca7f/25UM1IM45249.rgb.jpg/600x600bb.jpg" },
                { title: "Wonderful", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a3/56/8e/a3568e51-2a8a-7233-d8e9-a0e2d7e93675/mzaf_1684449525351123748.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/77/90/e87790f8-1dd6-d64b-3d5d-6083552aca7f/25UM1IM45249.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Justin Bieber",
            link: "https://music.apple.com/us/artist/justin-bieber/320569549?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/09/36/f9093663-c05f-7f95-0a60-4e95d52fbb22/25UMGIM93915.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "DAISIES", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6c/78/8a/6c788a98-0975-b771-3752-9b87a6ccb11f/mzaf_3673564090327752698.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/09/36/f9093663-c05f-7f95-0a60-4e95d52fbb22/25UMGIM93915.rgb.jpg/600x600bb.jpg" },
                { title: "Baby (feat. Ludacris)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0f/68/f5/0f68f51a-4246-0109-ff31-8ebbc7646849/mzaf_5893588237741494302.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b9/0a/b4/b90ab45a-07b1-0bcc-331c-c496a21d07e4/10UMGIM01134.rgb.jpg/600x600bb.jpg" },
                { title: "YUKON", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c6/38/e0/c638e055-fd65-4aa6-6066-6cb417482c70/mzaf_16834536300022131046.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/09/36/f9093663-c05f-7f95-0a60-4e95d52fbb22/25UMGIM93915.rgb.jpg/600x600bb.jpg" },
                { title: "Love Yourself", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e0/ef/a2/e0efa29d-320e-7af9-68e6-071894694ca6/mzaf_5736061249038172934.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/11/84/751184b0-77df-1eff-bb20-dac03247425d/15UMGIM59808.rgb.jpg/600x600bb.jpg" },
                { title: "Sorry", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/e0/ca/fae0cad3-bb0d-70b1-7acf-3d947c2c5d46/mzaf_10221799723075208405.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/11/84/751184b0-77df-1eff-bb20-dac03247425d/15UMGIM59808.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Ed Sheeran",
            link: "https://music.apple.com/us/artist/ed-sheeran/183313439?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/92/90/5092902f-df09-9293-b506-d09129b2d105/5026854208145.jpg/600x600bb.jpg",
            songs: [
                { title: "Camera", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7d/9f/2f/7d9f2f83-add0-58f2-d864-a4da9a640df9/mzaf_3168301438679800903.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/92/90/5092902f-df09-9293-b506-d09129b2d105/5026854208145.jpg/600x600bb.jpg" },
                { title: "Perfect", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a3/34/e8/a334e839-a234-317f-e911-25692e0c59ca/mzaf_2077702613748931138.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg" },
                { title: "Thinking Out Loud", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/00/0c/12000c9d-b63f-a9a3-2e04-cdb7a5644757/mzaf_16939856088810077744.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/36/f9/2d36f9a7-2c3e-ce0f-7fb6-036feecb221f/825646974450.jpg/600x600bb.jpg" },
                { title: "Shape of You", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8b/e8/4b/8be84b71-0ca5-6158-b4a4-4cf9b647cb17/mzaf_15441264363599058572.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg/600x600bb.jpg" },
                { title: "Shivers", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/6c/a3/756ca364-ca8a-6c1c-bb78-d58fddb2c112/mzaf_2913907350096081468.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c5/d8/c6/c5d8c675-63e3-6632-33db-2401eabe574d/190296491412.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Beyonce",
            link: "https://music.apple.com/us/artist/logic/30865945?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/04/81/d8/0481d849-b023-9852-0f3c-77ec9ed5e818/14UMGIM42335.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Driving Ms Daisy (feat. Childish Gambino)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b2/18/8f/b2188f85-edc6-787e-7dc3-fab21eaaa929/mzaf_2956982164993367562.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/04/81/d8/0481d849-b023-9852-0f3c-77ec9ed5e818/14UMGIM42335.rgb.jpg/600x600bb.jpg" },
                { title: "Love Language (Mike Dunn Black Love MixX)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/2b/4a/fb/2b4afb2d-a0e7-e206-44e2-e6d1d16ee7c0/mzaf_17420362656469785150.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/75/38/4e/75384e9f-3627-3580-ab86-209f5005e020/191079649891_cover.jpg/600x600bb.jpg" },
                { title: "Love Language (House of Omni Love Club Mix)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/8c/ac/88/8cac888d-9d37-b43d-3b6c-8cd6b203e96b/mzaf_12419760728965051303.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/75/38/4e/75384e9f-3627-3580-ab86-209f5005e020/191079649891_cover.jpg/600x600bb.jpg" },
                { title: "Beyonca", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/59/52/7c/59527c78-f6e2-e041-0eaf-1a664698c028/mzaf_5167251753995494936.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/76/3a/28/763a2869-8387-d39a-21cb-976de6cfae26/191924815303.jpg/600x600bb.jpg" },
                { title: "NEXT BAE and WIFEY a CHURCH GIRL, All-Time Baddest Billboard Club Banger From the Most Anticipated Film of Summer (feat. BEYONCA, CARBI D, MUSIC WORLDS FAVORITE & SAVAGE) [Radio Edit]", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/28/09/bd/2809bdd9-229b-1534-a261-c337ba6e05f3/mzaf_2192443479331706252.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/06/c0/0d/06c00d61-3686-5f64-aefd-8762c29f58ef/artwork.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Billie Eilish",
            link: "https://music.apple.com/us/artist/billie-eilish/1065981054?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "WILDFLOWER", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/35/10/303510ea-fe5b-39c7-26cc-d0e50698393f/mzaf_12539564791562071844.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg" },
                { title: "BIRDS OF A FEATHER", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/ff/37/06ff37b5-02b3-af0c-2a75-8d8bb11ce3fc/mzaf_1694141409109287793.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg" },
                { title: "ocean eyes", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/1f/6f/661f6fbf-cae2-5209-c12c-b9ae9bde9f56/mzaf_9388830456300374759.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/1d/30/021d3036-5503-3ed3-df00-882f2833a6ae/17UM1IM17026.rgb.jpg/600x600bb.jpg" },
                { title: "lovely", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/92/e9/94/92e9949d-7d6f-5ff8-a586-8d6cde186aaa/mzaf_7346702548563727816.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/27/94/d4/2794d4fc-c3e2-2373-3e6c-dd82fd5aefe6/18UMGIM18200.rgb.jpg/600x600bb.jpg" },
                { title: "What Was I Made For? (From The Motion Picture \"Barbie\")", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ba/fa/8a/bafa8ac4-d6a3-86f8-41d0-3791db2f44cb/mzaf_2424965756515596057.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7d/64/76/7d64761e-a9b3-6754-8ae1-b457338beead/23UMGIM77779.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Olivia Rodrigo",
            link: "https://music.apple.com/us/artist/olivia-rodrigo/979458609?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/fd/32/33fd32b1-0e43-9b4a-8ed6-19643f23544e/21UMGIM26092.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "traitor", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/f1/6f/d5f16f3c-2e7a-843b-b6e8-8888a8815831/mzaf_9649976824704974490.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/fd/32/33fd32b1-0e43-9b4a-8ed6-19643f23544e/21UMGIM26092.rgb.jpg/600x600bb.jpg" },
                { title: "drivers license", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6b/24/e5/6b24e529-c04f-7a3e-c755-66f77148def4/mzaf_281626907371977499.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/ed/8c/02ed8cab-c089-2fdd-7ce6-ab334a9a4e19/21UMGIM26093.rgb.jpg/600x600bb.jpg" },
                { title: "good 4 u", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/fe/76/7e/fe767e35-506c-7e11-7c52-00cee570102f/mzaf_10773869693643481503.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/02/ed/8c/02ed8cab-c089-2fdd-7ce6-ab334a9a4e19/21UMGIM26093.rgb.jpg/600x600bb.jpg" },
                { title: "favorite crime", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/77/8a/04/778a04fc-8c9b-bc8f-8cc2-832da06bf289/mzaf_7515993700798339425.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/fd/32/33fd32b1-0e43-9b4a-8ed6-19643f23544e/21UMGIM26092.rgb.jpg/600x600bb.jpg" },
                { title: "jealousy, jealousy", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3c/32/4d/3c324da9-8155-9d42-9c17-c3dad4d56a28/mzaf_4684856614573124364.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/33/fd/32/33fd32b1-0e43-9b4a-8ed6-19643f23544e/21UMGIM26092.rgb.jpg/600x600bb.jpg" },
            ]
        },
    ],
    rock: [
        {
            name: "Maneskin",
            link: "https://music.apple.com/us/artist/m%C3%A5neskin/1312874741?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/08/e0/6708e014-c1be-76b1-c520-a6567bf946a2/886446867755.jpg/600x600bb.jpg",
            songs: [
                { title: "Beggin'", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e4/51/0a/e4510ace-781c-dc91-bdbc-7fa36740475a/mzaf_6170303098038008119.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/08/e0/6708e014-c1be-76b1-c520-a6567bf946a2/886446867755.jpg/600x600bb.jpg" },
                { title: "SUPERMODEL", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2c/57/c8/2c57c8dc-7b69-9e5c-d15c-e01a3f400e67/mzaf_6462245193070120589.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/bb/58/53/bb5853b1-529a-7a30-e0d8-91b57ee47cff/196589138170.jpg/600x600bb.jpg" },
                { title: "THE LONELIEST", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b5/52/bd/b552bda7-a5bf-1c5f-91da-48e0b8783817/mzaf_7613488520428482369.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/600x600bb.jpg" },
                { title: "HONEY (ARE U COMING?)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/b7/b6/94b7b65c-2edd-9b01-e163-434d13c046e2/mzaf_14868310761181469071.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/04/85/f9/0485f96c-ccbc-068b-901b-9ae34b574007/196871323666.jpg/600x600bb.jpg" },
                { title: "CORALINE", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/7f/48/3c7f48d7-05af-f407-7c2d-a6fa34559e60/mzaf_4459138570361044167.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4b/1a/72/4b1a7220-bee2-8664-7153-adffa8d3df1e/886449063819.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Coldplay",
            link: "https://music.apple.com/us/artist/coldplay/471744?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg",
            songs: [
                { title: "Yellow", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/52/a5/d2/52a5d2f1-2501-9f3a-e5c1-420c17c3e244/mzaf_11020025762956009770.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg" },
                { title: "Sparks", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/33/23/1e/33231ed4-aa8f-5d3b-2977-385fdeb3c600/mzaf_428492192749454332.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/600x600bb.jpg" },
                { title: "Viva La Vida", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2b/04/65/2b0465c3-2db1-e461-2362-14b528456b8f/mzaf_1805426141027060154.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/52/aa/85/52aa851f-15b7-6322-f91f-df84b15b7b19/190295978044.jpg/600x600bb.jpg" },
                { title: "The Scientist", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ff/15/1c/ff151c03-8482-7b98-ee81-ea291ee5588e/mzaf_12089928568287261638.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b9/b4/2a/b9b42ad1-1e25-5096-da43-497a247e69a3/190295978051.jpg/600x600bb.jpg" },
                { title: "A Sky Full of Stars", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/31/4b/a2314b97-10b6-190c-72b3-45cc21bbf56b/mzaf_740612971315603868.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Imagine Dragons",
            link: "https://music.apple.com/us/artist/imagine-dragons/358714030?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Thunder", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/51/d7/55/51d75514-5e1d-ed01-52eb-76b30f7c8290/mzaf_6901903421309258968.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg" },
                { title: "Believer", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/7a/82/0f/7a820f2e-8f2b-cc24-48c2-3727cfbff9be/mzaf_11092187904649154210.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg" },
                { title: "Radioactive", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/be/66/b7/be66b7f1-7e62-4565-69db-27cb411b7b5c/mzaf_13804899651271995698.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1f/fa/09/1ffa092f-f52f-4a66-7d10-4cc5982dc747/12UMGIM46901.rgb.jpg/600x600bb.jpg" },
                { title: "Demons", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a0/d5/39/a0d53912-c0b8-dd9b-9984-3024efea19d0/mzaf_12895838630521728473.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/1f/fa/09/1ffa092f-f52f-4a66-7d10-4cc5982dc747/12UMGIM46901.rgb.jpg/600x600bb.jpg" },
                { title: "Whatever It Takes", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e0/61/7b/e0617bcd-6c32-b984-f100-95b94259557f/mzaf_7839019836925839746.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Foo Fighters",
            link: "https://music.apple.com/us/artist/foo-fighters/6906197?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg",
            songs: [
                { title: "Everlong", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/fd/4e/55fd4e25-f27a-c701-b2e6-8fcb329f0ac0/mzaf_1651810333578126228.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg" },
                { title: "My Hero", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b4/c1/4f/b4c14f38-d9ad-57ea-a580-67243f777539/mzaf_13185346483864815445.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/68/f5/86/68f586ca-a375-9965-a864-9e227e77ef5b/884977570328.jpg/600x600bb.jpg" },
                { title: "Best of You", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a9/07/7d/a9077d0b-d5bd-107e-7ce8-e29fdfb0cfd7/mzaf_5511817666600351413.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/03/15/58/0315584b-0c8d-93c8-2342-55b3fc3fa88b/828767967257.jpg/600x600bb.jpg" },
                { title: "The Pretender", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/aa/d5/6e/aad56e8b-d737-5946-3dac-16d3ef5f9181/mzaf_13520564566658456756.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1a/a8/d2/1aa8d22d-f1ab-0462-e6f0-4f19b2594383/886971151626.jpg/600x600bb.jpg" },
                { title: "Learn to Fly", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/29/a4/63/29a4631a-2c02-0c29-df54-b8ac9822f7d0/mzaf_8263105767042454833.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ef/02/55/ef025575-aa1d-efc2-f789-04f592275b8a/888880335630.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Red Hot Chili Peppers",
            link: "https://music.apple.com/us/artist/red-hot-chili-peppers/889780?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg",
            songs: [
                { title: "Under the Bridge", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/55/e9/1b/55e91b23-7df2-9cfe-afc1-d8d1067a2b8d/mzaf_8022269984955302856.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg" },
                { title: "Scar Tissue", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/8a/d6/90/8ad69061-e288-ba89-ab92-6e0ec8085a4e/mzaf_11878347587239122369.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg" },
                { title: "Can't Stop", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b0/a7/c6/b0a7c683-938c-c8ef-6e69-6ace4aeab936/mzaf_9096520743595187520.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/ec/27/73ec2771-a008-e55b-8ccd-faf6257d5cd0/093624932178.jpg/600x600bb.jpg" },
                { title: "Californication", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/69/f9/c3/69f9c3ae-696a-7d03-145a-995aa19e75d2/mzaf_11967480468703182891.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg" },
                { title: "Otherside", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e2/86/d8/e286d879-6a2a-b9aa-69e1-c527a267acc7/mzaf_15627545012757215328.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a0/fe/3f/a0fe3ff1-d068-b00e-6265-0b53dd144dcf/093624931997.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Arctic Monkeys",
            link: "https://music.apple.com/us/artist/arctic-monkeys/62820413?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg",
            songs: [
                { title: "Do I Wanna Know?", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/df/c3/9c/dfc39caa-a559-b5ac-5b50-472a1c300ca6/mzaf_14741548917211029550.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg" },
                { title: "505", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/bc/c1/32bcc1f1-f812-e765-5b4e-340e5c9ab373/mzaf_7885353230840382876.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/82/90/14/829014ad-a301-62ab-bee6-f4cca4457411/mzi.hozudery.jpg/600x600bb.jpg" },
                { title: "I Wanna Be Yours", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/f9/0a/93/f90a9394-1714-e179-016a-2debbe6a0b77/mzaf_17329326750890321965.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg" },
                { title: "Why'd You Only Call Me When You're High?", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d5/69/59/d5695958-0f8c-9db3-9878-b2045a981c72/mzaf_12816097313051041256.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg" },
                { title: "R U Mine?", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/c0/ab/52/c0ab5274-3623-f52d-5f05-8201e0e53ecd/mzaf_6347192368160018907.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg" },
            ]
        },
        {
            name: "The Killers",
            link: "https://music.apple.com/us/artist/the-killers/6483093?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/1a/5a/071a5aee-6e42-060c-35b9-6a6e45b9ea59/06UMGIM10441.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Mr. Brightside", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5c/95/cf/5c95cf3a-bef3-97e7-b6aa-3adde55deb30/mzaf_15328769143459778457.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/1a/5a/071a5aee-6e42-060c-35b9-6a6e45b9ea59/06UMGIM10441.rgb.jpg/600x600bb.jpg" },
                { title: "Somebody Told Me", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3f/52/56/3f525606-7cb8-0292-51c1-c617802ba773/mzaf_433193577063250516.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/1a/5a/071a5aee-6e42-060c-35b9-6a6e45b9ea59/06UMGIM10441.rgb.jpg/600x600bb.jpg" },
                { title: "When You Were Young", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/62/45/11/62451138-29b4-464f-4a9f-24e8c6933a40/mzaf_18073769405768626044.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/d8/d7/0dd8d755-2147-9954-8b2e-991b25e49f51/17UM1IM06934.rgb.jpg/600x600bb.jpg" },
                { title: "All These Things That I've Done", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/dc/84/5ddc84d2-c386-3351-3080-22079911ba23/mzaf_14477363246605726110.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/1a/5a/071a5aee-6e42-060c-35b9-6a6e45b9ea59/06UMGIM10441.rgb.jpg/600x600bb.jpg" },
                { title: "Read My Mind", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/39/e4/ac/39e4ac54-6884-81ff-8e31-c19ec97e3af0/mzaf_896698750337723300.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/d8/d7/0dd8d755-2147-9954-8b2e-991b25e49f51/17UM1IM06934.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Paramore",
            link: "https://music.apple.com/us/artist/paramore/75950796?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9a/3a/26/9a3a2608-29a7-5585-f990-cdfeb10b7394/075679955005.jpg/600x600bb.jpg",
            songs: [
                { title: "Misery Business", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/47/71/fc/4771fcd0-22e1-f85a-d2b6-5504e491e179/mzaf_3393359742475527534.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9a/3a/26/9a3a2608-29a7-5585-f990-cdfeb10b7394/075679955005.jpg/600x600bb.jpg" },
                { title: "Ain't It Fun", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/fe/d5/24/fed5241b-c847-a8f7-f5b9-51ce45ba3ed3/mzaf_208965274966115301.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/32/cb/9d/32cb9d04-ef0f-93bb-fd2f-19b395785025/075679956187.jpg/600x600bb.jpg" },
                { title: "Still Into You", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/db/60/13/db6013f7-510d-ef12-878b-16feaac842fb/mzaf_7662707399072425562.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/32/cb/9d/32cb9d04-ef0f-93bb-fd2f-19b395785025/075679956187.jpg/600x600bb.jpg" },
                { title: "Decode", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a2/ff/e8/a2ffe8f2-8642-e806-e5c8-9afbc5cc6e8d/mzaf_17255648141518396899.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/31/99/dd/3199ddd5-6317-d6a1-f447-712ac86161ba/mzi.bwfrnenf.jpg/600x600bb.jpg" },
                { title: "The Only Exception", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/51/07/87/5107879e-ca4e-f401-51fb-acdf0acb7736/mzaf_7737332381720758927.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/42/48/29/424829a6-42fe-77e7-770e-a760f54ec3de/dj.qnyuzqoy.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Muse",
            link: "https://music.apple.com/us/artist/muse/1093360?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/53/13/26/531326a2-b93d-9ab8-30cc-e4a9392e7b86/825646092666.jpg/600x600bb.jpg",
            songs: [
                { title: "Uprising", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/22/d2/17/22d217f9-c5f9-2c6d-ae38-9a22af073d04/mzaf_9055110886505793905.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/53/13/26/531326a2-b93d-9ab8-30cc-e4a9392e7b86/825646092666.jpg/600x600bb.jpg" },
                { title: "Supermassive Black Hole", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/ca/6e/44ca6e47-9910-8133-4ccb-dbe6a064f3ef/mzaf_15122557870955362047.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4a/c1/5d/4ac15dc9-2ae6-1d5b-3add-43bae227f941/825646095452.jpg/600x600bb.jpg" },
                { title: "Madness", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4b/ee/a8/4beea8d9-6682-1339-dce2-87698f27303c/mzaf_13080475636327614829.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b8/50/04/b850045b-bfab-77de-040b-94b13c6f79ef/825646557646.jpg/600x600bb.jpg" },
                { title: "Starlight", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/be/ee/7d/beee7d83-77c9-0cd1-daa3-f76a5d0db5c5/mzaf_13246627122539623042.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4a/c1/5d/4ac15dc9-2ae6-1d5b-3add-43bae227f941/825646095452.jpg/600x600bb.jpg" },
                { title: "Hysteria", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/e2/05/fde2052f-9f80-3943-8982-cef15305f8e4/mzaf_13199724852251065315.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4a/73/ab/4a73abdf-1d55-b3fe-484d-e023a507428e/5054197904233.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Twenty One Pilots",
            link: "https://music.apple.com/us/artist/twenty-one-pilots/349736311?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg/600x600bb.jpg",
            songs: [
                { title: "Stressed Out", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/63/a0/d9/63a0d94f-a9f1-f34a-5fb1-7860fe6a5d94/mzaf_16239168264701956438.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg/600x600bb.jpg" },
                { title: "Ride", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/46/e6/5546e64f-213d-05cb-b22b-e6d2e8b0253f/mzaf_17878511657521177775.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg/600x600bb.jpg" },
                { title: "Heathens", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4f/e3/f6/4fe3f647-e764-10d3-60e9-56c464d29dad/mzaf_10167995027897946605.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2f/76/c0/2f76c0c7-5aaf-eb97-2002-f40c9ecde722/075679910486.jpg/600x600bb.jpg" },
                { title: "Chlorine", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3d/f8/9b/3df89b73-db77-541b-a7f0-c0d3d3f9f055/mzaf_1248698505287556369.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/c0/2b/a3c02b76-baa1-e575-dcba-247509200424/075679864789.jpg/600x600bb.jpg" },
                { title: "Car Radio", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/8b/96/948b962d-400e-9aa3-7142-e8552f8313c0/mzaf_1085614068592433331.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/73/a7/23/73a7230c-19df-02a4-ff4e-53944024f63d/075679957924.jpg/600x600bb.jpg" },
            ]
        },
    ],
    electronic: [
        {
            name: "Calvin Harris",
            link: "https://music.apple.com/us/artist/calvin-harris/201955086?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/da/50/cc/da50cc80-3515-a38d-369b-0d700ffd249d/886444820448.jpg/600x600bb.jpg",
            songs: [
                { title: "Summer", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/84/bb/dd84bb40-8582-1688-99ee-e0e910d07e53/mzaf_13428644382929655820.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/da/50/cc/da50cc80-3515-a38d-369b-0d700ffd249d/886444820448.jpg/600x600bb.jpg" },
                { title: "Feel So Close (Radio Edit)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f3/7e/03/f37e03b3-be3f-f97b-7020-52ef91817dda/mzaf_16178999154864523420.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/af/22/abaf2296-ed4d-6da2-c24d-503cfdfa4c1f/0617465356858.jpg/600x600bb.jpg" },
                { title: "This Is What You Came For", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e6/4c/8a/e64c8a6b-49e1-6ead-4f22-7d81dea2768e/mzaf_1927716231528220099.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/59/57/a6/5957a66e-fb10-4065-5739-7c54236339e4/886445857290.jpg/600x600bb.jpg" },
                { title: "Sweet Nothing (feat. Florence Welch)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/87/6b/29/876b29ee-586e-c375-8afa-4fec8f395c96/mzaf_10966959714852930749.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ab/af/22/abaf2296-ed4d-6da2-c24d-503cfdfa4c1f/0617465356858.jpg/600x600bb.jpg" },
                { title: "Outside (feat. Ellie Goulding)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a9/1d/67/a91d67ff-f6ed-9854-293b-6464a403c032/mzaf_7782381657554339456.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/da/50/cc/da50cc80-3515-a38d-369b-0d700ffd249d/886444820448.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "David Guetta",
            link: "https://music.apple.com/us/artist/david-guetta/5557599?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg",
            songs: [
                { title: "Without You (feat. Usher)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/61/ab/87/61ab878f-2154-bf62-8658-6dc81d2023d2/mzaf_4408860083314420497.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg" },
                { title: "Titanium (feat. Sia)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/31/cd/6b/31cd6b1d-f6e9-3a87-9156-fd87a54458ed/mzaf_16813673358292342157.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/99/b4/7b/99b47bd8-2b22-e1ef-2e60-c5147f27a861/dj.thrvmjqj.jpg/600x600bb.jpg" },
                { title: "Memories (feat. Kid Cudi)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bd/a0/e4/bda0e46c-1042-b0db-1061-f5c18f9c40dc/mzaf_4261340392305263263.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7f/26/33/7f2633e4-dace-c4b5-2920-f3bae1b48b08/5099990785054.jpg/600x600bb.jpg" },
                { title: "Play Hard (feat. Akon & Ne-Yo)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5d/b3/2c/5db32c3c-e4ab-17ec-7d64-90f58dd89ade/mzaf_15527121759477764735.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/b9/e2/f6b9e2df-c638-3e4b-c28d-a68b06465758/5099997943051.jpg/600x600bb.jpg" },
                { title: "Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/52/fd/14/52fd1489-3635-504f-f858-5b953cfe888b/mzaf_5772502843162404424.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/7f/d5/687fd582-2387-5044-a881-0bc4f0697338/825646194315.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Tiesto",
            link: "https://music.apple.com/us/artist/stavros-savvidis/1260761871?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg",
            songs: [
                { title: "Katigorame (Live)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/4b/7f/00/4b7f002a-0b5c-2779-e59d-bcc8cbbdefd4/mzaf_3460515657575633182.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg" },
                { title: "Ellas (Live)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/28/c8/4f/28c84f40-194d-ea0d-e094-2123eac16079/mzaf_12331447249442287575.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg" },
                { title: "To kokkinon to milon (Live)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/08/01/da/0801da90-3533-8f73-d954-229c584f5006/mzaf_4588250026325704331.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg" },
                { title: "File (Live)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/64/2f/28/642f2870-750b-ab6d-de7d-c2e546377224/mzaf_12892947417464519272.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg" },
                { title: "I giagiam i Maria (Live)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/7d/a5/ad/7da5ad0a-4cba-06b3-344d-5560c4521ef9/mzaf_9150839719876507747.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/9b/1c/a69b1c44-bb95-f804-60cb-ecead3e79110/191773528416.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Martin Garrix",
            link: "https://music.apple.com/us/artist/martin-garrix/430932944?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/1e/f0/6e1ef055-195a-bb73-d5a8-5926058366a5/8712944577525.png/600x600bb.jpg",
            songs: [
                { title: "Animals", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a1/75/48/a1754841-d05c-0402-bdee-16d724ae47a2/mzaf_16624181595158272558.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/1e/f0/6e1ef055-195a-bb73-d5a8-5926058366a5/8712944577525.png/600x600bb.jpg" },
                { title: "In the Name of Love", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/04/5b/65/045b6517-c917-9f02-d559-d01aeceed6be/mzaf_8202124789937422466.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/8a/d2/fc8ad2a2-c75b-c33f-5d1a-070539e647bd/886446028088.jpg/600x600bb.jpg" },
                { title: "Scared to Be Lonely", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c8/68/c6/c868c64f-ac0a-02f5-3e3f-9973eb973e90/mzaf_2376876007302771550.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/46/1f/44461f0c-a949-ce72-0164-704056469fc8/886446328331.jpg/600x600bb.jpg" },
                { title: "Ocean (feat. Khalid)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/56/75/41/56754140-00f7-da48-6cc1-143b5226c518/mzaf_6183525184019318289.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/aa/9f/21/aa9f2126-5745-4e74-b71f-e7a864c24cc8/886447159491.jpg/600x600bb.jpg" },
                { title: "High on Life (feat. Bonn)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ab/30/52/ab3052c2-a573-2856-ca84-bee36e48fb5b/mzaf_17717451846597519991.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/58/a2/33/58a23353-b253-405c-b930-d5f3e6b87476/886447232422.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "The Chainsmokers",
            link: "https://music.apple.com/us/artist/the-chainsmokers/580391756?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/600x600bb.jpg",
            songs: [
                { title: "Closer (feat. Halsey)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/dc/23/00dc238a-0b1f-c187-af7b-e853ec409f7f/mzaf_11464661757406389997.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/600x600bb.jpg" },
                { title: "Don't Let Me Down (feat. Daya)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/fd/44/61fd4485-50ca-56ad-02c4-8c0af34b0a89/mzaf_5517273432377515758.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/600x600bb.jpg" },
                { title: "Something Just Like This", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/24/76/9a/24769a15-f4e4-0dd6-e69d-561265d003e1/mzaf_4429079767719665040.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9d/56/6f/9d566f55-5253-bed6-5c31-df952dae649d/886446379289.jpg/600x600bb.jpg" },
                { title: "Roses (feat. ROZES)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/10/0f/91/100f9112-0461-fe2b-59b0-952cfdc77061/mzaf_14235468882253898594.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5e/5c/ea/5e5cead2-a482-48ef-8134-f725c2b49202/mzm.lydeceiv.jpg/600x600bb.jpg" },
                { title: "Paris", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/20/de/79/20de7988-16d4-c56f-b6c9-8f379a382862/mzaf_1808557621579678191.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9d/56/6f/9d566f55-5253-bed6-5c31-df952dae649d/886446379289.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Marshmello",
            link: "https://music.apple.com/us/artist/marshmello/980795202?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e5/61/69/e561696f-40c5-19c1-ec6d-5b2dfaa919f2/21.jpg/600x600bb.jpg",
            songs: [
                { title: "Happier", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bf/7e/0b/bf7e0b89-771d-3dd6-6847-f6bcb0f47455/mzaf_9092230057184038309.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e5/61/69/e561696f-40c5-19c1-ec6d-5b2dfaa919f2/21.jpg/600x600bb.jpg" },
                { title: "Alone", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b1/3e/7d/b13e7d69-4213-302d-e758-1a7973165719/mzaf_10436877470185704690.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7e/be/33/7ebe3370-959a-94f7-77e2-c9e7fea9a4ed/859716988917_cover.jpg/600x600bb.jpg" },
                { title: "Miles On It", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/71/e0/c7/71e0c7d0-2123-77bd-2322-e9a8d11333e5/mzaf_12415459325798775890.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/5e/2d/165e2ddb-c596-8565-d86a-6231b4a911a6/196872075496.jpg/600x600bb.jpg" },
                { title: "Here With Me (feat. CHVRCHES)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5b/4f/46/5b4f469c-c579-5d05-399d-affdc48e8ed1/mzaf_7342529567678900962.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/60/18/7f/60187f66-42da-aae6-8dc5-c98254986e4e/96.jpg/600x600bb.jpg" },
                { title: "Silence (feat. Khalid)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8b/6d/48/8b6d4835-1f2d-ee06-99dd-cd9ca59910bf/mzaf_290981189711570517.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/2e/d5/43/2ed54360-4339-e96c-46a9-0b273e906762/886446681832.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Skrillex",
            link: "https://music.apple.com/us/artist/skrillex/356545647?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/70/da/3170da66-9280-ccd2-1f97-57d8a1996f9e/075679970930.jpg/600x600bb.jpg",
            songs: [
                { title: "Scary Monsters and Nice Sprites", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6a/f5/f2/6af5f2fd-4fe3-6981-8b01-3bb3a7417027/mzaf_2676481089062971648.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/31/70/da/3170da66-9280-ccd2-1f97-57d8a1996f9e/075679970930.jpg/600x600bb.jpg" },
                { title: "Where Are Ü Now (feat. Justin Bieber)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/62/37/84/62378490-73b9-a28d-e527-ea2b7ba98ffa/mzaf_16150298454697770075.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b3/ea/21/b3ea217e-d5d0-4db7-5942-15cdff5ad68d/075679927354.jpg/600x600bb.jpg" },
                { title: "First of the Year (Equinox)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/20/8a/d8/208ad8c8-317d-8ae1-e3ac-a3489ded5dd0/mzaf_5949655403646979292.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music/d8/66/cd/mzi.ppitbdsw.jpg/600x600bb.jpg" },
                { title: "Make It Bun Dem", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/87/ce/98/87ce9827-cc29-fbdc-f6d7-0af9a59f227b/mzaf_16964987768963310171.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/39/47/78/3947783a-be7d-e30e-6932-77bdd5d603fd/075679958839.jpg/600x600bb.jpg" },
                { title: "fuze", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/56/b7/3d/56b73d12-d919-2d47-2318-9dbab6e70a15/mzaf_16119696956754002290.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/11/dc/21/11dc218b-9e3f-8f87-4bf0-9b8d72b4389a/075679591661.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Diplo",
            link: "https://music.apple.com/us/artist/jack-%C3%BC/918783022?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b3/ea/21/b3ea217e-d5d0-4db7-5942-15cdff5ad68d/075679927354.jpg/600x600bb.jpg",
            songs: [
                { title: "Where Are Ü Now (feat. Justin Bieber)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/62/37/84/62378490-73b9-a28d-e527-ea2b7ba98ffa/mzaf_16150298454697770075.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b3/ea/21/b3ea217e-d5d0-4db7-5942-15cdff5ad68d/075679927354.jpg/600x600bb.jpg" },
                { title: "Heartbroken", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/6d/93/d4/6d93d4c6-bf08-1d9c-63f2-e3f9ea51a2d6/mzaf_4207883980291584534.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/fd/36/21/fd3621da-b13b-cbce-0524-1a3593d55a8b/196871291576.jpg/600x600bb.jpg" },
                { title: "Electricity (feat. Diplo & Mark Ronson)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/48/30/e4/4830e442-2499-7ac4-f3c5-675b39f50b12/mzaf_15746448909993464834.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/02/d9/f2/02d9f2ea-f95e-c67a-21ae-9bcee5bdd551/886447284360.jpg/600x600bb.jpg" },
                { title: "GUAYANDO (feat. Tokischa)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a0/b6/f9/a0b6f973-e1e8-d770-cf32-0dde90f5ab2d/mzaf_9135326384492983526.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c8/3a/0e/c83a0eb6-beae-f06c-6a8c-c218fbad6ec2/4123.jpg/600x600bb.jpg" },
                { title: "PEPPA POT (feat. America Foster)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6b/ad/b8/6badb8f4-bb84-d2db-36ff-61959b0156d0/mzaf_628307637774894951.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c8/3a/0e/c83a0eb6-beae-f06c-6a8c-c218fbad6ec2/4123.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Zedd",
            link: "https://music.apple.com/us/artist/zedd/368433979?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d9/f2/2b/d9f22b74-8ef3-73d8-5da1-e5268c42f114/12UMGIM52120.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Clarity (feat. Foxes)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/dc/73/a0/dc73a02a-0d6d-8931-0eba-90845253cd8e/mzaf_13265866442777153519.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/d9/f2/2b/d9f22b74-8ef3-73d8-5da1-e5268c42f114/12UMGIM52120.rgb.jpg/600x600bb.jpg" },
                { title: "Stay the Night (feat. Hayley Williams)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/dc/63/ad/dc63ad57-d29c-12bb-20b4-e1575cfedb5d/mzaf_4459962662378114761.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2e/c9/85/2ec98519-c171-def7-3c64-158292ba470e/13UAAIM75149.rgb.jpg/600x600bb.jpg" },
                { title: "The Middle", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7a/b5/58/7ab5586d-6824-66ce-a635-c1ea8377bf4b/mzaf_12124705388787161775.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/86/72/8d867252-5fb7-a83f-ab81-07d07db8c628/18UMGIM02231.rgb.jpg/600x600bb.jpg" },
                { title: "Stay", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/01/05/64/010564f9-2edd-a7d9-fcda-7085f0a23709/mzaf_1237137138243977941.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e5/08/90/e50890a8-205e-a810-dcda-44b614f99f5f/00602557442878.rgb.jpg/600x600bb.jpg" },
                { title: "Break Free (feat. Zedd)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fd/1c/38/fd1c38ee-5751-f01e-905b-b05013d437a1/mzaf_8322259389061078941.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a5/39/86/a5398609-ad90-50d3-57ad-0f87a4df5ac4/14UMGIM28138.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Avicii",
            link: "https://music.apple.com/us/artist/avicii/298496035?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/5b/1e/185b1ef5-5d97-19d8-aebf-8e29e41874ef/13UAAIM59255.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Wake Me Up", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/25/e0/c5/25e0c550-5b73-cc36-8284-d895a5003342/mzaf_6161147851225913679.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/5b/1e/185b1ef5-5d97-19d8-aebf-8e29e41874ef/13UAAIM59255.rgb.jpg/600x600bb.jpg" },
                { title: "Levels", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4e/83/73/4e8373f3-5bfc-e1fc-7bb6-c38a7ffe5dd2/mzaf_17142038859172531733.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/38/43/67384338-9ed7-fc68-5927-93f1fcf4705d/11UMGIM36900.rgb.jpg/600x600bb.jpg" },
                { title: "The Nights", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/45/e2/37/45e23756-71cf-b746-b84d-be6b07493f7b/mzaf_7897566818705027118.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/35/4d/a0/354da058-972b-dcf9-feec-609895ba8cb2/14UMGIM56567.rgb.jpg/600x600bb.jpg" },
                { title: "Hey Brother", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1a/c5/9c/1ac59c16-fd13-bc3a-52ca-b87d43c0a894/mzaf_14973842251672828897.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/18/5b/1e/185b1ef5-5d97-19d8-aebf-8e29e41874ef/13UAAIM59255.rgb.jpg/600x600bb.jpg" },
                { title: "Waiting For Love", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/04/c2/50/04c25030-34b0-4249-28d5-2cc553292214/mzaf_12995499579856771946.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e0/f4/25/e0f425ba-2848-f1c2-e102-9ddcef5e9d9d/15UMGIM35223.rgb.jpg/600x600bb.jpg" },
            ]
        },
    ],
    classical: [
        {
            name: "Ludovico Einaudi",
            link: "https://music.apple.com/us/artist/ludovico-einaudi/7420827?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ad/11/b0/ad11b0f3-3389-a2ab-3d66-41fca2226e98/21UMGIM96807.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Experience", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/04/6c/ba/046cba0f-8565-5f3a-fcaf-f05ea3259174/mzaf_14438637290417705093.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ad/11/b0/ad11b0f3-3389-a2ab-3d66-41fca2226e98/21UMGIM96807.rgb.jpg/600x600bb.jpg" },
                { title: "Jay", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/82/d3/5b/82d35beb-3404-c6c1-6f5e-3064c1df4b29/mzaf_17461618361698990801.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/89/36/65/89366541-16f8-da1c-cb8e-e0ca56444e0a/24UMGIM93777.rgb.jpg/600x600bb.jpg" },
                { title: "Nuvole Bianche", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e4/10/58/e4105877-36b9-3972-8e1f-7ab1a0582ada/mzaf_6655221370238140447.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ea/44/86/ea448600-257f-670f-7f06-332e02b42abc/06UMGIM59381.rgb.jpg/600x600bb.jpg" },
                { title: "Adieux", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/81/39/92/813992cc-a987-8dcb-74b9-638ccd14d1fc/mzaf_6219669589672432037.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/cc/59/16cc5938-00cf-7eb1-52dc-29a47a00c178/22UM1IM30564.rgb.jpg/600x600bb.jpg" },
                { title: "Experience", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/88/3c/11883c24-4236-5b50-f5d1-06790fe510e7/mzaf_6107573181954206985.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/13/fd/7b/13fd7bfd-125a-4493-dc85-96aef9c25562/12UMGIM65023.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Hans Zimmer",
            link: "https://music.apple.com/us/artist/hans-zimmer/454295032?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/5b/73/f45b735a-8d7a-9713-b217-0f8e1593c28b/794043201943.jpg/600x600bb.jpg",
            songs: [
                { title: "Cornfield Chase", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7e/98/a5/7e98a5cb-bd12-63ed-ffcb-d37c3cf985fe/mzaf_7617842653260388284.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/5b/73/f45b735a-8d7a-9713-b217-0f8e1593c28b/794043201943.jpg/600x600bb.jpg" },
                { title: "Time", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/22/62/5d/22625d0d-b915-819f-818f-d063e4e3137c/mzaf_2225353431330087941.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9f/7e/60/9f7e6017-3bd3-570f-7890-eba0f3aa6c33/mzi.hxbvposl.jpg/600x600bb.jpg" },
                { title: "Jack Sparrow", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d4/e1/f3/d4e1f36d-3dbb-ea41-c11f-ac13a3ff2162/mzaf_3223665131766879819.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/47/3f/bb/473fbbcb-8700-e373-846f-1f5d7cd65e43/00050086144778.rgb.jpg/600x600bb.jpg" },
                { title: "Now We Are Free", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/aa/c8/c9/aac8c907-cee5-0e0e-ab7e-ae3bff2310b5/mzaf_16000013619782250826.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/22/2a/1d/222a1d18-6d21-fec2-3ef0-ce0f7988ed65/06UMGIM05485.rgb.jpg/600x600bb.jpg" },
                { title: "F1", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d6/50/0b/d6500b71-3444-95a5-7b90-850a396a14e7/mzaf_6742704310283429789.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/08/a5/e9/08a5e9ba-0eaf-a379-969e-72e1891fc75b/075679604279.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Max Richter",
            link: "https://music.apple.com/us/artist/max-richter/54782697?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/58/ec/d7/58ecd75d-8df8-c05f-5e1a-b144292c6493/17UM1IM64259.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "On The Nature Of Daylight", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e4/ce/be/e4cebe4d-e128-c149-d3c3-e863c12e5b03/mzaf_3541492753066162998.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/58/ec/d7/58ecd75d-8df8-c05f-5e1a-b144292c6493/17UM1IM64259.rgb.jpg/600x600bb.jpg" },
                { title: "Dream 1 (before the wind blows it all away) [Pt. 1]", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/ad/2e/6ead2e4b-d3aa-903d-5305-84f96643f47b/mzaf_7108353105703173463.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/88/76/ae/8876aeec-a15c-4591-faae-5badc72909a0/16UMGIM69827.rgb.jpg/600x600bb.jpg" },
                { title: "Recomposed By Max Richter: Vivaldi, The Four Seasons: Spring 1 (2012)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bd/b9/f8/bdb9f87a-0ff3-8538-f504-71e1c444bec2/mzaf_12649098146622754350.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/95/8d/e6/958de6c5-34df-e0ce-5c9d-3a9d346618e5/14UMGIM06770.rgb.jpg/600x600bb.jpg" },
                { title: "On the Nature of Daylight", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/bd/46/41bd469d-4b54-1eaa-2741-f88965b78c5c/mzaf_2355663926230438763.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/2c/e9/672ce9cc-151b-de66-89a6-4676155c1b66/25UM1IM52013.rgb.jpg/600x600bb.jpg" },
                { title: "On the Nature of Daylight (Piano Version)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2d/12/9d/2d129d90-867b-d008-f570-d70cb457ea60/mzaf_13903290444870735603.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/38/54/6038546e-bdbb-8a85-1f30-d7261a929ebe/24UMGIM98945.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Lang Lang",
            link: "https://music.apple.com/us/artist/lang-lang/5519614?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/da/11/7a/da117a06-a56c-f699-47d8-5663b2fbbd15/22UMGIM42480.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Beauty and the Beast (From \"Beauty and the Beast\")", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bf/13/c2/bf13c2f7-5b15-398c-f1f8-a1f095606efe/mzaf_17305837608059655303.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/da/11/7a/da117a06-a56c-f699-47d8-5663b2fbbd15/22UMGIM42480.rgb.jpg/600x600bb.jpg" },
                { title: "Consolations, S. 172: No. 2 in E Major. Un poco più mosso", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/36/fa/47/36fa47cd-9732-5ad4-7ef7-56ec1793dacf/mzaf_10578814886068848135.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/0b/05/7f0b0590-3e21-b19c-463f-1d51e327efca/25UM1IM01348.rgb.jpg/600x600bb.jpg" },
                { title: "Dos Oruguitas (From \"Encanto\")", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/fa/3f/41/fa3f4167-77dd-6b69-2d82-3809559c2ec2/mzaf_9367982044829263550.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/da/11/7a/da117a06-a56c-f699-47d8-5663b2fbbd15/22UMGIM42480.rgb.jpg/600x600bb.jpg" },
                { title: "Feed the Birds (From \"Mary Poppins\")", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/70/ac/26/70ac2649-5584-b4b4-9b43-a2f8905fed2b/mzaf_758154880135901005.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/da/11/7a/da117a06-a56c-f699-47d8-5663b2fbbd15/22UMGIM42480.rgb.jpg/600x600bb.jpg" },
                { title: "Bagatelle No. 25 in A Minor, WoO 59 \"Für Elise\"", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/5f/d1/815fd1f1-171c-0b10-c6b4-6ee66a186fa9/mzaf_12221169740753287757.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/20/f3/18/20f318ef-89d6-73a7-7c66-d0cd8b4d003c/18UMGIM83169.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Yo-Yo Ma",
            link: "https://music.apple.com/us/artist/yo-yo-ma/275557?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0c/f5/ed/0cf5ed24-02ba-03f4-8c83-ff41dcba5be3/884977621860.jpg/600x600bb.jpg",
            songs: [
                { title: "Cello Suite No. 1 in G Major, BWV 1007: I. Prélude", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ca/9b/ac/ca9bac06-c539-3e5b-e5ec-1003f3c0dfee/mzaf_13520284934561183293.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0c/f5/ed/0cf5ed24-02ba-03f4-8c83-ff41dcba5be3/884977621860.jpg/600x600bb.jpg" },
                { title: "Cello Suite No. 1 in G Major, BWV 1007: I. Prélude", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bf/cb/67/bfcb67dd-bc3e-c2af-5647-84c05713ba1a/mzaf_15628349942128734738.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/9a/21/c29a2148-e8c1-e2bc-1da8-bcbe3350b28c/886447042472.jpg/600x600bb.jpg" },
                { title: "Piano Trio No. 4 in B-Flat Major, Op. 11 \"Gassenhauer\": II. Adagio", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f6/07/5d/f6075d62-8a37-5473-5aae-c80bea0f6ac1/mzaf_135647871722708681.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/50/85/4d/50854da3-c075-a502-a3ed-1b349bb0e6d8/196872891591.jpg/600x600bb.jpg" },
                { title: "Here Comes the Sun", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e7/87/d6/e787d6c4-08be-83b1-f40b-987dc63b6539/mzaf_10061816352703173854.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music/9c/c4/d0/mzi.esaimbhl.jpg/600x600bb.jpg" },
                { title: "The Mission: Gabriel's Oboe", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fc/f3/18/fcf318d7-cef0-d0f0-6663-4d6ed2772cd6/mzaf_9428274082655245855.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1f/ce/85/1fce854b-4663-5677-7787-a5c328426bbb/mzi.bfaomlsk.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Andrea Bocelli",
            link: "https://music.apple.com/us/artist/sarah-brightman/132517?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bf/aa/6b/bfaa6b30-3bc9-af12-c776-510e3f21b475/18UMGIM74788.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Time to Say Goodbye (Con Te Partirò)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/92/b5/3792b56c-cba7-d4df-7a3b-030d2f30d329/mzaf_7670541124993352944.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bf/aa/6b/bfaa6b30-3bc9-af12-c776-510e3f21b475/18UMGIM74788.rgb.jpg/600x600bb.jpg" },
                { title: "The Prayer (feat. Céline Dion)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1d/a4/a3/1da4a36e-9745-0c37-2d4e-3c72786a2b71/mzaf_3383397386758389299.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/cc/83/29/cc832966-fd92-4de6-433f-60af94e17eef/15UMGIM02107.rgb.jpg/600x600bb.jpg" },
                { title: "Con Te Partiro", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/af/65/a4/af65a4b3-1e0e-3e43-8104-0a0279d8cdbd/mzaf_9808087866093852683.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f8/9b/54/f89b5493-fb60-3779-0ce9-27ebee8c5949/15UMGIM02105.rgb.jpg/600x600bb.jpg" },
                { title: "Perfect Symphony", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/61/15/65/6115658e-f429-952f-4472-07e631ae7d56/mzaf_7998871041113360490.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b1/5b/eb/b15beba6-aaae-ca18-e061-c0e2e2464a93/190295690922.jpg/600x600bb.jpg" },
                { title: "Bésame Mucho", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7c/05/84/7c0584e9-a1e8-a57f-6b8d-c0e57934d00f/mzaf_17535103832152832832.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/91/5a/69/915a69b5-e09f-b9f1-5fbb-3429adf2d109/15UMGIM02114.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "John Williams",
            link: "https://music.apple.com/us/artist/john-williams/63748?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3a/96/a6/3a96a66e-d54d-5f36-39b3-064b03812649/00602537348855.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Theme from Jurassic Park", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f1/df/86/f1df8697-0cd1-2b2e-4156-774c42d52f02/mzaf_6088124320270724230.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3a/96/a6/3a96a66e-d54d-5f36-39b3-064b03812649/00602537348855.rgb.jpg/600x600bb.jpg" },
                { title: "Carol of the Bells", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/1b/dd/331bdd4d-dfc6-19c2-6f62-4b52d3c0a6ca/mzaf_1574992713894866570.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9c/01/3b/9c013b6d-a316-3119-a94a-c2ef2fbfbefa/886445465518.jpg/600x600bb.jpg" },
                { title: "The Imperial March (Darth Vader's Theme)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/9f/32/fa/9f32faba-485c-e6a7-6268-738137d8243b/mzaf_1418521719746168780.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0a/5d/af/0a5daf0f-34f0-6413-9b8c-fe668663b3dd/18UMGIM22122.rgb.jpg/600x600bb.jpg" },
                { title: "Duel of the Fates", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/c8/52/c2c852ac-ea6a-9fac-c1ce-aa389df6f803/mzaf_12984852979243985528.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/f6/57/faf657aa-5796-f34e-5ce7-3a85051038d1/00050087389147.rgb.jpg/600x600bb.jpg" },
                { title: "Hedwig's Theme", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/43/85/18/438518d0-8fd5-1a15-18c0-aad9f814845e/mzaf_11676418529425576487.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/02/0c/90/020c90c5-abe9-e441-e3b6-110c51d9d0f3/mzi.odxaqexu.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Philip Glass",
            link: "https://music.apple.com/us/artist/philip-glass/791154?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/cf/07/b3/cf07b334-2a4c-a068-1794-feacd2a253f7/dj.pvjwdybz.jpg/600x600bb.jpg",
            songs: [
                { title: "Opening", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/57/d8/26/57d8264c-5a26-261c-dd8a-46fc5e32b1cb/mzaf_1949403662987915511.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/cf/07/b3/cf07b334-2a4c-a068-1794-feacd2a253f7/dj.pvjwdybz.jpg/600x600bb.jpg" },
                { title: "Metamorphosis: Metamorphosis Two", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/09/7f/21/097f215e-ba5e-54f9-292b-5787fd73bbcd/mzaf_1979896474389099860.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/bc/5a/d1/bc5ad1cf-17f6-628e-dcad-8683dd321170/contsched.apmmhmuv.jpg/600x600bb.jpg" },
                { title: "Air on the G String from Orchestral Suite No. 3 in D Major, BWV 1068", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/51/1a/2d/511a2db4-3272-8560-3e27-3ef76efe0f28/mzaf_10724394752926975860.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/3b/99/f33b9926-b31a-34f7-1f2f-805f688b5bf8/886448587316.jpg/600x600bb.jpg" },
                { title: "Sonata in D Minor, K. 32", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b9/ca/dd/b9cadd52-7880-654d-ed3c-07abe972f987/mzaf_891818179967869561.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/3b/99/f33b9926-b31a-34f7-1f2f-805f688b5bf8/886448587316.jpg/600x600bb.jpg" },
                { title: "3 Gymnopédies: No. 1, Lent et douloureux", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/dc/66/98/dc6698e7-6196-c1e2-8e6e-bf90c8a5ac21/mzaf_16054713755206560074.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/3b/99/f33b9926-b31a-34f7-1f2f-805f688b5bf8/886448587316.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Hilary Hahn",
            link: "https://music.apple.com/us/artist/hilary-hahn/20536649?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/1b/cd/55/1bcd5548-0111-102b-a5e9-e8fc49f350ca/00028947419921.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Violin Concerto No. 1 in A Minor, BWV 1041: I. (Allegro moderato)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e7/f0/9c/e7f09c39-ac76-0a77-e145-af1cf5c408e3/mzaf_10755867395157248282.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/1b/cd/55/1bcd5548-0111-102b-a5e9-e8fc49f350ca/00028947419921.rgb.jpg/600x600bb.jpg" },
                { title: "Partita No. 2 for Violin in D Minor, BWV 1004: V. Chaconne", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f7/b9/93/f7b99389-7238-a0ab-a68d-5bf195d45acd/mzaf_3708931946428971565.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a3/5b/48/a35b485c-dd41-e732-e201-98066405dfcc/827969274927.jpg/600x600bb.jpg" },
                { title: "Concerto for 2 Violins, Strings, and Continuo in D Minor, BWV 1043: 2. Largo ma non tanto", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0f/fd/ab/0ffdabff-a8c2-c8a3-3d9d-506deafee7ed/mzaf_2620049348491303659.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/77/ef/a5/77efa536-58ce-1e10-c62a-a242b95620c1/00028948358892.rgb.jpg/600x600bb.jpg" },
                { title: "Violin Concerto in D Major, Op. 61: I. Allegro ma non troppo", src: "https://audio-ssl.itunes.apple.com/itunes-assets/Music/55/93/eb/mzm.kfqkdmle.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/f5/46/71/f5467148-1591-7c09-405c-fa732768efe9/dj.ptyclafh.jpg/600x600bb.jpg" },
                { title: "Sonata for Violin Solo No. 1 in G Minor, BWV 1001: I. Adagio", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/70/d3/0f/70d30fed-57de-7f35-596b-628a6c3769c6/mzaf_4504386334395084476.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ea/89/62/ea896287-c5d4-ae44-79a2-4b6ab3491cab/00028948339570.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Joshua Bell",
            link: "https://music.apple.com/us/artist/josh-groban/170344?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d1/05/d6/d105d6f9-2132-d05b-ef9a-62086b043046/093624940364.jpg/600x600bb.jpg",
            songs: [
                { title: "Mi Mancherai (Il Postino) [feat. Joshua Bell]", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/1d/32/c8/1d32c8f2-1b49-bc20-5a6d-9ceaff9446fb/mzaf_9514483245849486771.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d1/05/d6/d105d6f9-2132-d05b-ef9a-62086b043046/093624940364.jpg/600x600bb.jpg" },
                { title: "Méditation from Thaïs", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a8/ff/0e/a8ff0e02-0945-2001-dfca-8a7981b4a47f/mzaf_10316337859447554498.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2b/24/c5/2b24c517-56f8-5dce-4313-21210d6d4083/196871115094.jpg/600x600bb.jpg" },
                { title: "Gianni Schicchi: O mio babbino caro", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8a/9a/be/8a9abea0-96bc-ade4-6a2e-f2d1e838f346/mzaf_15434647599120514350.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/67/ff/da/67ffda01-2b1e-7400-ea6f-5ac57e8514a6/696998789425.jpg/600x600bb.jpg" },
                { title: "Piano Trio No. 1 in D Minor, Op. 49: II. Andante con moto tranquillo (Original Version)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7c/c6/b6/7cc6b664-b54e-7823-b091-b7fdea0bdf41/mzaf_16266997576741742361.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/4e/f2/764ef214-a4ac-69bc-e2f1-539db92d66d2/196872220933.jpg/600x600bb.jpg" },
                { title: "Violin Concerto No. 1 in G Minor, Op. 26: III. Finale. Allegro energico", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/66/0f/3e/660f3e51-301f-f6cb-1577-bcc3f128cfe8/mzaf_18055580972792228931.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e9/65/8f/e9658fc6-7db9-8cee-f86c-8568206cbbd9/886446989723.jpg/600x600bb.jpg" },
            ]
        },
    ],
    jazz: [
        {
            name: "Norah Jones",
            link: "https://music.apple.com/us/artist/norah-jones/1001750?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Don't Know Why", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/84/fb/f6/84fbf66a-1ff8-6c24-869b-2dd502c1295c/mzaf_6256667964544161324.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.jpg" },
                { title: "Come Away with Me", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/01/c9/1c/01c91cd9-4e7a-fd32-1d21-ffd8378cf3ef/mzaf_10587614009285230737.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.jpg" },
                { title: "Sunrise", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3b/40/e6/3b40e66c-157c-2f7e-f783-6a9f640d352f/mzaf_14944651481988462391.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/16/bf/bd/16bfbd53-3e83-c840-bdf6-053326af381b/05099946404855.rgb.jpg/600x600bb.jpg" },
                { title: "Turn Me On", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/77/4b/76/774b764f-29ad-a7d7-6123-34e887f0b6b8/mzaf_13731261716362976972.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.jpg" },
                { title: "The Long Day Is Over", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9c/05/da/9c05da6f-56be-01e4-5673-be61c6e1d519/mzaf_8223444590237020319.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a0/a0/8d/a0a08df2-390b-ad05-0d32-6673bcf7a2a9/13UABIM02784.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Diana Krall",
            link: "https://music.apple.com/us/artist/diana-krall/72783?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b1/0c/12/b10c12b7-c0c4-8c3f-9603-81c4f07991b1/06UMGIM15905.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "The Look of Love", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/e4/e1/afe4e162-8cbf-5eb8-67fb-8611cb773d79/mzaf_16400487650437000822.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b1/0c/12/b10c12b7-c0c4-8c3f-9603-81c4f07991b1/06UMGIM15905.rgb.jpg/600x600bb.jpg" },
                { title: "California Dreamin'", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/34/a2/4434a265-cc1f-438c-25b4-99091318a34e/mzaf_17491253325686495058.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/70/66/86/70668633-34c8-7c2b-b207-4621779a0145/14UMGIM36179.rgb.jpg/600x600bb.jpg" },
                { title: "Walk On By", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/24/67/c52467ff-0d0d-9065-03ad-d68c2357cd7a/mzaf_17433346187046212417.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/e8/14/e3/e814e333-791f-77ec-49cb-38e88ca7f5a6/09UMGIM01083.rgb.jpg/600x600bb.jpg" },
                { title: "'S Wonderful", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/27/90/2a27900c-0ba9-d24b-4535-658c8c9fa064/mzaf_13022971823784065953.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b1/0c/12/b10c12b7-c0c4-8c3f-9603-81c4f07991b1/06UMGIM15905.rgb.jpg/600x600bb.jpg" },
                { title: "Temptation", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f3/96/3c/f3963cc9-b36a-9453-f359-92c9f19cd6d8/mzaf_1626035952205233071.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/db/b9/cb/dbb9cb10-6701-324f-872d-691b183c673d/14UAEIM00558.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Michael Buble",
            link: "https://music.apple.com/us/artist/michael-bubl%C3%A9/799597?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a4/67/6d/a4676d95-233f-5e56-a6bf-9ff73c8189bf/093624942757.jpg/600x600bb.jpg",
            songs: [
                { title: "Home", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5a/d3/10/5ad3108f-bf17-5ed5-db58-2c036b89353a/mzaf_6686544826919583161.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a4/67/6d/a4676d95-233f-5e56-a6bf-9ff73c8189bf/093624942757.jpg/600x600bb.jpg" },
                { title: "Everything", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ad/04/59/ad04599e-d872-f715-9abe-aee947fdc983/mzaf_17497254389167586656.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d9/a6/6f/d9a66fa4-7bbb-2a6d-c819-4b18f304b157/093624942795.jpg/600x600bb.jpg" },
                { title: "Feeling Good", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3e/9b/d5/3e9bd53c-9e7f-4674-5195-e145e4fbcf47/mzaf_10298399621432799643.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a4/67/6d/a4676d95-233f-5e56-a6bf-9ff73c8189bf/093624942757.jpg/600x600bb.jpg" },
                { title: "Haven't Met You Yet", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/d0/e6/d1/d0e6d157-d332-b0d8-93eb-4a853820fccf/mzaf_14138735562205395627.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/58/ca/a3/58caa3a0-e5ee-c229-53dd-abd2c1a8d157/093624942771.jpg/600x600bb.jpg" },
                { title: "It's Beginning To Look a Lot Like Christmas", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/60/92/39/609239fd-e1b3-b31a-d527-95adb63aa337/mzaf_361152750552946547.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/37/2d/6e/372d6e16-7a32-91f0-1a03-0f2d9dbe389e/093624942788.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Gregory Porter",
            link: "https://music.apple.com/us/artist/gregory-porter/3437037?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/14/bd/d9/14bdd99a-e571-81b4-0d58-04f771367f3d/16UMGIM07575.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "Holding On (feat. Kem)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/20/1f/b6201fe9-a3fa-2fcb-5758-f453e5d2fe1b/mzaf_17357845858454883731.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/14/bd/d9/14bdd99a-e571-81b4-0d58-04f771367f3d/16UMGIM07575.rgb.jpg/600x600bb.jpg" },
                { title: "Insanity (feat. Lalah Hathaway)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/ce/3f/d3ce3fcc-bc87-2261-323a-ba2074ea453b/mzaf_8714289662975886072.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/14/bd/d9/14bdd99a-e571-81b4-0d58-04f771367f3d/16UMGIM07575.rgb.jpg/600x600bb.jpg" },
                { title: "It's Probably Me (Live at Polar Music Prize, Stockholm / 2017)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/34/51/8d345187-fa87-14bd-e761-0cca81a5d176/mzaf_8983811498862092180.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d3/ab/87/d3ab8764-48c1-1782-6a54-c9793d7e93c0/21UM1IM13986.rgb.jpg/600x600bb.jpg" },
                { title: "If Love Is Overrated", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/39/ad/0b/39ad0b21-7c69-415b-a9c5-4bb43b06b807/mzaf_6990517226082761849.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8b/82/67/8b826761-4151-0708-f7d7-f1226b95a246/19UM1IM08620.rgb.jpg/600x600bb.jpg" },
                { title: "Holding On", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/d5/ed/d2d5ed97-5d4d-7290-2159-e5e010060988/mzaf_12066602907928694112.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/14/bd/d9/14bdd99a-e571-81b4-0d58-04f771367f3d/16UMGIM07575.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Esperanza Spalding",
            link: "https://music.apple.com/us/artist/esperanza-spalding/73212782?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/a8/f8/53a8f895-d123-2085-3953-a78a2dd09407/00053361314026.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "I Know You Know", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bb/5c/de/bb5cde22-6b0a-e1ac-0435-c14f80430dd9/mzaf_2472739505735062518.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/a8/f8/53a8f895-d123-2085-3953-a78a2dd09407/00053361314026.rgb.jpg/600x600bb.jpg" },
                { title: "Precious", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/98/6c/44/986c44fb-5efa-b1af-8624-a4e824024905/mzaf_9406790540741856600.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/a8/f8/53a8f895-d123-2085-3953-a78a2dd09407/00053361314026.rgb.jpg/600x600bb.jpg" },
                { title: "Why We Speak (feat. Q-Tip & Esperanza Spalding)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/47/86/d9/4786d930-1357-dfef-311c-6d3da58b946c/mzaf_7661274703047995120.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d0/52/65/d052651f-d47d-0d30-e640-d315d22de89e/21CRGIM30819.rgb.jpg/600x600bb.jpg" },
                { title: "Fall In", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/61/d1/4a/61d14a40-0e46-666c-f102-d285f807b5ee/mzaf_16156342090840883183.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/a8/f8/53a8f895-d123-2085-3953-a78a2dd09407/00053361314026.rgb.jpg/600x600bb.jpg" },
                { title: "Have Yourself a Merry Little Christmas (feat. Esperanza Spalding)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/76/aa/a8/76aaa888-2414-1244-b448-2aac5f0461b4/mzaf_14583859163468023356.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/6d/8c/29/6d8c2926-f4b9-c7a8-3bc1-8eb1c7ac7897/886447366646.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Robert Glasper",
            link: "https://music.apple.com/us/artist/robert-glasper/4643652?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/09/4e/a2094eb5-0945-1a31-46f5-9aebd7c25164/24CRGIM41829.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "That One Morning", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/5b/c3/2e5bc383-5b38-7d32-78db-ce3900f11c0f/mzaf_9097196618866973872.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a2/09/4e/a2094eb5-0945-1a31-46f5-9aebd7c25164/24CRGIM41829.rgb.jpg/600x600bb.jpg" },
                { title: "Wayfaring Traveler", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f0/46/8b/f0468b68-1ec6-540a-636c-5a0597f6d3da/mzaf_6253872394665088956.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/a8/c5/53a8c59e-6f5e-06c5-aaaa-d27a28d3dcc5/199806536612.jpg/600x600bb.jpg" },
                { title: "Better Than I Imagined (feat. H.E.R. & Meshell Ndegeocello)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9b/4a/53/9b4a5340-dd87-790f-30bd-270608193fb4/mzaf_6755321457730342112.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e4/bb/bc/e4bbbc7f-2e8a-27f5-fa0b-ef620523b8d3/20CRGIM23889.rgb.jpg/600x600bb.jpg" },
                { title: "Ah Yeah (feat. Musiq Soulchild & Chrisette Michele)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a1/c5/64/a1c564ba-40f4-6fe8-0d2d-08cc7a7f8554/mzaf_1947087755948050744.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/d7/e6/2fd7e69c-d339-050a-cbe8-80295d68cfd0/13UABIM02211.rgb.jpg/600x600bb.jpg" },
                { title: "Calls (feat. Jill Scott)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/26/b6/50/26b650a9-7a3d-1dcf-51c6-dbfd9992afb8/mzaf_10567038403255752787.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cb/c7/1d/cbc71df4-e2b7-4ea4-7edb-563a9aaf7b31/00602537433919.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Kamasi Washington",
            link: "https://music.apple.com/us/artist/childish-gambino/466842536?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3c/d3/37/3cd3376c-55f6-26ea-1dad-5d26b9391a45/196872224030.jpg/600x600bb.jpg",
            songs: [
                { title: "No Excuses (feat. Ludwig Göransson & Kamasi Washington)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/58/17/5d/58175d5f-0ec9-3d4d-c653-fbd31b0a1efc/mzaf_5471860620182111103.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3c/d3/37/3cd3376c-55f6-26ea-1dad-5d26b9391a45/196872224030.jpg/600x600bb.jpg" },
                { title: "Truth", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6f/ba/91/6fba9102-023e-02ab-8c32-3f8acdca737c/mzaf_6336985981916495846.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/84/ee/af/84eeafb5-41a4-cc73-d803-cae2a6fa12a7/889030017055.png/600x600bb.jpg" },
                { title: "Street Fighter Mas", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/44/a9/98/44a998f6-1976-ba2a-cb6a-fb41b39c88fc/mzaf_8290731801081279909.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7a/55/fa/7a55fa75-c905-96bd-0856-e207058f6f6e/cover.jpg/600x600bb.jpg" },
                { title: "Sleepless Nights (feat. Phoelix)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c1/e1/f5/c1e1f510-94f1-a73b-a4fe-c7e77cbe99aa/mzaf_6389841180288619383.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/63/2a/65/632a65d7-91bc-e38f-7e9a-af4c71e95022/194690210686_cover.jpg/600x600bb.jpg" },
                { title: "Freeze Tag (feat. Phoelix)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/06/9c/46/069c46d4-6640-134c-1d97-c7a8153f316b/mzaf_13611191694376156440.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/63/2a/65/632a65d7-91bc-e38f-7e9a-af4c71e95022/194690210686_cover.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Snarky Puppy",
            link: "https://music.apple.com/us/artist/snarky-puppy/152987454?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d8/c0/af/d8c0af7c-f1ca-576d-646c-5fa254809dda/824833007056.jpg/600x600bb.jpg",
            songs: [
                { title: "Lingus", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ca/af/6b/caaf6bff-0066-68fc-6865-feea79f74355/mzaf_15966489191812358741.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d8/c0/af/d8c0af7c-f1ca-576d-646c-5fa254809dda/824833007056.jpg/600x600bb.jpg" },
                { title: "Waves Upon Waves", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/d4/c7/b6d4c7c1-8a43-9961-5aae-517cae483930/mzaf_8422363736908628669.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ab/38/fa/ab38fa57-852e-b6a3-d614-40ef19edbe89/199350761416.jpg/600x600bb.jpg" },
                { title: "What About Me?", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b9/7e/9b/b97e9b43-a1fa-3375-a1a1-2cf336e19cf9/mzaf_14935124482669315290.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d8/c0/af/d8c0af7c-f1ca-576d-646c-5fa254809dda/824833007056.jpg/600x600bb.jpg" },
                { title: "Shofukan", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/eb/b1/57/ebb1576e-fbd3-834c-5f79-14cc74f5cc83/mzaf_11869149220171255927.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d8/c0/af/d8c0af7c-f1ca-576d-646c-5fa254809dda/824833007056.jpg/600x600bb.jpg" },
                { title: "As You Are But Not As You Were", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/fb/ae/41fbaef2-bfe0-4544-4e33-25068e70d693/mzaf_5791359231715895114.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ab/38/fa/ab38fa57-852e-b6a3-d614-40ef19edbe89/199350761416.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Jon Batiste",
            link: "https://music.apple.com/us/artist/jon-batiste/211400086?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/600x600bb.jpg",
            songs: [
                { title: "FREEDOM", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0b/71/5e/0b715e2f-0add-c52f-2b5c-7394fe9d11c5/mzaf_4829230283771194604.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/600x600bb.jpg" },
                { title: "It's All Right", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bd/1c/b0/bd1cb0bc-0e4f-ce74-03c9-4a390cd049ad/mzaf_3848396521795899362.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/95/83/bc9583e2-b3dd-359a-e1ba-3c1be0dcae96/20UM1IM11311.rgb.jpg/600x600bb.jpg" },
                { title: "Für Elise - Batiste", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/04/b4/0d/04b40da9-0e47-efe1-4d26-120038044b9b/mzaf_7343961268512033668.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1b/9c/5b/1b9c5b46-7a9a-1b5b-1258-e3afcc819a1d/24UM1IM03086.rgb.jpg/600x600bb.jpg" },
                { title: "I NEED YOU", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/56/ea/13/56ea13fe-0186-697f-00d6-10aea14015ba/mzaf_97289690036403161.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/cc/e6/f3/cce6f334-44c2-0570-3b95-05942cd9dcaf/21UMGIM00518.rgb.jpg/600x600bb.jpg" },
                { title: "What a Wonderful World", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0e/52/20/0e52207d-9526-978c-9b2e-bd1e256e42ef/mzaf_2302579011323792719.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fe/ba/00/feba0092-85a2-ae64-5953-0de32086d409/00602567889229.rgb.jpg/600x600bb.jpg" },
            ]
        },
        {
            name: "Jacob Collier",
            link: "https://music.apple.com/us/artist/lizzy-mcalpine/1350245112?uo=4",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/11/6a/64/116a64ee-0db3-4e59-bd86-f44008e47f85/5056167170006.jpg/600x600bb.jpg",
            songs: [
                { title: "erase me (feat. Jacob Collier)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/fa/fb/14/fafb1432-cef3-a26b-01a3-df440e62f16b/mzaf_10909790324411038613.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/11/6a/64/116a64ee-0db3-4e59-bd86-f44008e47f85/5056167170006.jpg/600x600bb.jpg" },
                { title: "Bridge Over Troubled Water (feat. John Legend & Tori Kelly)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f1/9b/fa/f19bfa9f-87db-1ebe-4cc8-be8e80d84f5a/mzaf_4111812276701244307.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e8/de/3f/e8de3f38-215a-339f-b64a-d40ebfc3ea68/23UMGIM98768.rgb.jpg/600x600bb.jpg" },
                { title: "Heaven (Butterflies)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/70/b2/6670b240-4389-374e-95b8-8528a95edcaa/mzaf_541286063333405295.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a8/b2/4e/a8b24e46-cf47-9823-89c7-a4802fe51144/25UM1IM25811.rgb.jpg/600x600bb.jpg" },
                { title: "Never Gonna Be Alone (feat. Lizzy McAlpine & John Mayer)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bf/f3/df/bff3df52-aeb3-5318-e07f-e551964fc966/mzaf_15145049002801337280.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5b/e8/a5/5be8a583-ca75-fd75-5716-5f5fd9da07b5/22UMGIM53933.rgb.jpg/600x600bb.jpg" },
                { title: "Little Blue (feat. Brandi Carlile)", src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/79/ae/99/79ae9912-c243-58a5-e25a-550e316dc290/mzaf_12949692824064709921.plus.aac.p.m4a", art: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/9e/1b/dd9e1b8a-032d-7ad7-1750-f5ef0a2761bb/23UMGIM98770.rgb.jpg/600x600bb.jpg" },
            ]
        },
    ]
};

// Flatten all genre songs into one list for "All Songs"
const ALL_SONGS = [];
let globalSongId = 1;

Object.values(GENRE_ARTISTS).forEach(genreList => {
    genreList.forEach(artist => {
        artist.songs.forEach(song => {
            ALL_SONGS.push({
                id: globalSongId++,
                title: song.title,
                artist: artist.name,
                art: song.art,
                src: song.src
            });
        });
    });
});

// Shuffle for variety
ALL_SONGS.sort(() => Math.random() - 0.5);

window.SoundHubData = {
    allSongs: ALL_SONGS,
    genreArtists: GENRE_ARTISTS
};
