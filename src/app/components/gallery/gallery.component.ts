import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryImages: { url: string, caption: string }[] = [
    { url: 'https://kisanvedika.bighaat.com/wp-content/uploads/2022/12/prahlad-inala-BJlJG23ciXI-unsplash.jpg', caption: 'Farmer working in the field' },
    { url: 'https://miro.medium.com/v2/resize:fit:626/1*TPU81y8rVPeN4iKyJpVq9g.jpeg', caption: 'Contractor managing a project' },
    { url: 'https://agronoblog.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-29-15.39.05-Workers-sorting-and-packing-fruits-in-a-post-harvest-facility-showcasing-the-process-of-selection-and-packaging-in-post-harvest-management.-The-image.jpg', caption: 'Retailer showcasing products' },
    { url: 'https://agronoblog.com/wp-content/uploads/2023/11/DALL%C2%B7E-2023-11-29-15.39.05-Workers-sorting-and-packing-fruits-in-a-post-harvest-facility-showcasing-the-process-of-selection-and-packaging-in-post-harvest-management.-The-image.jpg', caption: 'Laborer involved in construction' },
    { url: 'https://static.vecteezy.com/system/resources/previews/014/258/272/large_2x/the-farmer-works-in-the-field-with-a-tractor-agroindustry-and-agribusiness-farming-machinery-plowing-and-loosening-ground-crop-care-soil-quality-improvement-farm-field-work-cultivation-photo.jpg', caption: 'Farmer plowing field with tractor' },
    { url: 'https://thumbs.dreamstime.com/b/hands-planting-seeds-dirt-139094852.jpg', caption: 'Close-up of hands planting seedlings' },
    { url: 'https://media.istockphoto.com/id/493635647/photo/young-angus-friesian-guernsey-and-jersey-cows-calves-lush-field.jpg?s=612x612&w=0&k=20&c=qwGNx6tJ7fMaRpxR7wwztB8fld0BMHP-GLK0rREuI_0=', caption: 'Cattle grazing in lush green pasture' },
    { url: 'https://w0.peakpx.com/wallpaper/210/140/HD-wallpaper-sunset-over-wheat-field-graphy-sunsets-landscapes-nature-fields-wheat-fields-sky-thumbnail.jpg', caption: 'Sunset over a wheat field' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sqnwzfY16MVGsXj8AkaC6P6sSWjP8uPcRA3kYCmPwB-tdD63BU8W-6sGMQY5EbpnOu8&usqp=CAU', caption: 'Farmers market with fresh produce' },
    { url: 'https://www.planetnatural.com/wp-content/uploads/2014/02/tomato-types-1.jpg', caption: 'Harvesting ripe tomatoes in greenhouse' },
    { url: 'https://images.pexels.com/videos/5307769/aerial-agriculture-ancient-architecture-5307769.jpeg', caption: 'Aerial view of agricultural landscape' },
    { url: 'https://t4.ftcdn.net/jpg/04/93/19/29/360_F_493192951_CqGTd01zubBnKet9a1k2u9fJ0Im3YgP9.jpg', caption: 'Sheep grazing on hillside pasture' },
    { url: 'https://www.treehugger.com/thmb/V91hmHh7kkDUKipIszgWZN9TiO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1034249376-f18308ef6b4a431fbb6f9ceebc083830.jpg', caption: 'Close-up of beekeeper working with hive' },
    { url: 'https://previews.123rf.com/images/scofano/scofano2304/scofano230404078/203323447-a-peaceful-countryside-scene-with-a-red-barn-in-the-distance-surrounded-by-fields-of-hay-and-cattle.jpg', caption: 'Rural barn surrounded by fields' },
    { url: 'https://st.depositphotos.com/4435155/57391/i/450/depositphotos_573917768-stock-photo-female-farmer-cultivating-soybean-her.jpg', caption: 'Farmer examining soybean crop' },
    { url: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/IMAGE_1695883923.webp', caption: 'Sustainable farming practices' },
    { url: 'https://t3.ftcdn.net/jpg/05/76/27/00/360_F_576270057_MkWx3KnbHUrw5Q6zLoJbSUAKPvCLjajJ.jpg', caption: 'Vineyard with grape vines in autumn' },
    { url: 'https://img.freepik.com/premium-photo/crisp-harvest-closeup-hand-holding-freshly-picked-apple_1077802-404.jpg', caption: 'Close-up of hand holding freshly picked apples' },
    { url: 'https://skdrdpindia.org/wp-content/uploads/CHSC-Inner.jpg', caption: 'Agricultural machinery in operation' },
    { url: 'https://t4.ftcdn.net/jpg/02/00/87/95/360_F_200879536_7gp2kmhJnzBCbkhSg2dDhUcYy7oYpj1n.jpg', caption: 'Organic vegetable garden' },
    { url: 'https://farm8.staticflickr.com/7563/16331923741_30661a358f.jpg', caption: 'Farmers discussing crop rotation' },
    { url: 'https://www.milwaukeemag.com/wp-content/uploads/2020/08/GettyImages-536748783-1024x726.jpg', caption: 'Fields of sunflowers in bloom' },
    { url: 'https://www.shutterstock.com/image-photo/agriculture-industry-farming-animal-husbandry-600nw-659176180.jpg', caption: 'Livestock feeding on sunny day' },
    { url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/5/15/01/shutterstock_2090335084.jpg.rend.hgtvcom.616.411.85.suffix/1684177311624.jpeg', caption: 'Gardener harvesting fresh herbs' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVj-FpFV7j6z2ZHSruliduPN5iqcwAo9JLt87qgiiKPZjaHtmub42oIhPurBOYjFV2Kw&usqp=CAU', caption: 'Traditional windmill in rural landscape' },
    { url: 'https://static.vecteezy.com/system/resources/previews/013/364/152/non_2x/landscape-with-yellow-dry-grass-on-a-field-covered-with-snow-against-a-blue-sky-winter-wheat-field-photo.jpg', caption: 'Winter wheat field covered in snow' },
    { url: 'https://img.freepik.com/premium-photo/rows-potted-plants-greenhouse-with-sunlight-shining-through-glass-roof_753333-2938.jpg', caption: 'Greenhouse with rows of potted plants' },
    { url: 'https://t4.ftcdn.net/jpg/06/28/00/57/360_F_628005772_ay9rPwwBBb1FpoeCio1mjstxUNrNJbS5.jpg', caption: 'Close-up of irrigation system in use' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ87MKdd5w9cwlCOtniyb1onMoD-r2skabA&s', caption: 'Field of blooming lavender' },
    { url: 'https://img.freepik.com/premium-photo/photo-wellkept-chicken-coop-quiet-farmyard_1055425-47484.jpg', caption: 'Chicken coop in farmyard' },
    { url: 'https://www.shutterstock.com/image-photo/perfect-birds-eye-view-blooming-600nw-2037059201.jpg', caption: 'Aerial view of orchard in spring' },
    { url: 'https://s.abcnews.com/images/Lifestyle/strawberries-farmers-market-gty-1-thg-180619_hpMain_16x9_992.jpg', caption: 'Farmers market stall with fresh berries' },
    { url: 'https://i.etsystatic.com/8658748/r/il/7b0e3f/2364185263/il_fullxfull.2364185263_8ej4.jpg', caption: 'Rural landscape with farmhouse' },
    { url: 'https://i0.wp.com/geographicbook.com/wp-content/uploads/2023/10/fsoil-02-821589-g001.jpg?fit=510%2C332&ssl=1', caption: 'Sustainable agriculture techniques' },
    { url: 'https://static.vecteezy.com/system/resources/previews/033/692/604/non_2x/farmer-with-tractor-on-the-field-at-sunrise-harvesting-concept-farmer-operating-a-tractor-working-in-the-field-in-the-morning-ai-generated-free-photo.jpg', caption: 'Tractor plowing field in early morning' },
    { url: 'https://media.istockphoto.com/id/491230304/photo/bee-on-the-flower.jpg?s=612x612&w=0&k=20&c=G6WVJnSD2au7BoN8UowSjoa9leSR5OoAihDH5em-U_w=', caption: 'Bee pollinating flower in field' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nUN9b-9XO-G3Rd9fVOygueFd3XNijFNfwA&s', caption: 'Crops growing in fertile soil' },
    { url: 'https://c8.alamy.com/comp/2G4FE8K/control-and-inspection-of-organic-ripe-fruit-harvest-season-2G4FE8K.jpg', caption: 'Farmer checking quality of ripening fruit' },
    { url: 'https://img.freepik.com/premium-photo/cows-grazing-green-meadow-blue-sky-with-clouds_810275-549.jpg', caption: 'Livestock grazing under blue sky' },
    { url: 'https://www.graincentral.com/wp-content/uploads/2022/12/vic-maximum-barley-ryan-milgate-scaled.jpeg', caption: 'Field of barley ready for harvest' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5-PQGqQmxxj_xRQLy0tMgzsOgXFwxXRccg&s', caption: 'Freshly harvested pumpkins on display' },
    { url: 'https://t4.ftcdn.net/jpg/06/41/88/33/360_F_641883382_1ED7kfd4Flhkl8PIhrSMUHGcISBCrmmG.jpg', caption: 'Agricultural tractor plowing field' },
    { url: 'https://thumbs.dreamstime.com/z/summer-grapes-pruning-gardener-prune-hedging-leaf-removal-128681192.jpg', caption: 'Gardener pruning grape vines' },
    { url: 'https://www.shutterstock.com/image-photo/corn-cobs-plantation-field-260nw-2285254977.jpg', caption: 'Close-up of healthy cornfield' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNI3T2nDD2j5GJo6AHVvbUd0anqtNsg-syabNrl9kt_q9q1zBC6EsIImai-rywj9b5qs&usqp=CAU', caption: 'Farmers market with local honey' },
    { url: 'https://www.shutterstock.com/image-photo/smart-woman-farmer-agronomist-using-600nw-2034625139.jpg', caption: 'Farmer inspecting crop quality' },
    { url: 'https://as1.ftcdn.net/v2/jpg/05/21/13/76/1000_F_521137697_46k9oE2nCMjTefuGBRyRJjwiSrPwXJo6.jpg', caption: 'Rural farm landscape with barn' },
    { url: 'https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D', caption: 'Scenic view of farmstead at sunset' },
    { url: 'https://miro.medium.com/v2/resize:fit:1400/1*dof-3bZME6Lw5xWAdV2y3A.jpeg', caption: 'Organic farming plot with diverse crops' },
    { url: 'https://s3.envato.com/files/414077811/d26b6483-f2b0-4bf7-9390-f0cc3d656794.jpg', caption: 'Tractor spraying fertilizer on field' },
    { url: 'https://www.yates.com.au/media/plants/vegetable/pr-tn-vege-lettuce.jpg?mode=pad&width=480', caption: 'Field of fresh lettuce plants' },
    { url: 'https://i.ytimg.com/vi/w9_Mx1zLFb8/hqdefault.jpg', caption: 'Farmer harvesting ripe melons' },
    { url: 'https://img.timvieckysu.com/2019/08/ky-su-nong-nghiep-thi-khoi-nao-4.jpg', caption: 'Agricultural research in lab setting' },
    { url: 'https://img.freepik.com/premium-photo/hands-holding-plant-with-soil_34998-273.jpg', caption: 'Close-up of hand holding soil with seedling' }
    // Add more images and captions as needed
  ];

  currentImageIndex: number = 0;
  currentImage = this.galleryImages[this.currentImageIndex];

  constructor() { }

  ngOnInit(): void {
    interval(3000).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    this.currentImage = this.galleryImages[this.currentImageIndex];
  }
}
