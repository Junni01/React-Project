using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ReactAppV2.Models
{
    public class DataLoader
    {


        public List<DataPackage> GetDataList()
        {








            // This part works when run on a normal desktop, but won't work in Azure, probably because the app is hosted on a share machine
            // and Microsoft does not want you to snoop around and read files from the hard drive, well let's generate the data manually.
            //StreamReader reader = new StreamReader(File.OpenRead(@"..\\ReactAppV2\\wwwroot\\database\\databasedata.txt"));
            //string line;


            //while ((line = reader.ReadLine()) != null)
            //{
            //    String[] tokens = line.Split(';');
            //    DataPackage d = new DataPackage();

            //    d.id = Convert.ToInt32(tokens[0]);
            //    d.name = tokens[1];
            //    d.species = tokens[2];
            //    d.latinSpeciesName = tokens[3];
            //    d.gender = tokens[4];
            //    d.slogan = tokens[5];

            //    DataList.Add(d);

            //}

            //reader.Close();



            List<DataPackage> DataList = new List<DataPackage>()
            {
                    new DataPackage() {id = 1, name = "Roselle", species = "Gazelle, thomson's", latinSpeciesName = "Gazella thompsonii", gender = "Female", slogan = "iterate customized bandwidth"},
                    new DataPackage() {id = 2, name = "Karlotta", species = "Magistrate black colobus", latinSpeciesName = "Colobus guerza", gender = "Female", slogan = "reintermediate global e-commerce"},
                    new DataPackage() {id = 3, name = "Rebbecca", species = "Monkey, red howler", latinSpeciesName = "Alouatta seniculus", gender = "Female", slogan = "engineer B2B technologies"},
                    new DataPackage() {id = 4, name = "Duffie", species = "Coqui francolin", latinSpeciesName = "Francolinus coqui", gender = "Male", slogan = "expedite extensible technologies"},
                    new DataPackage() {id = 5, name = "Thadeus", species = "Kudu, greater", latinSpeciesName = "Tragelaphus strepsiceros", gender = "Male", slogan = "revolutionize end-to-end action-items"},
                    new DataPackage() {id = 6, name = "Kacie", species = "Thrasher, curve-billed", latinSpeciesName = "Toxostoma curvirostre", gender = "Female", slogan = "innovate innovative e-tailers"},
                    new DataPackage() {id = 7, name = "Ev", species = "Francolin, coqui", latinSpeciesName = "Francolinus coqui", gender = "Male", slogan = "grow end-to-end experiences"},
                    new DataPackage() {id = 8, name = "Thurstan", species = "Three-banded plover", latinSpeciesName = "Charadrius tricollaris", gender = "Male", slogan = "envisioneer strategic paradigms"},
                    new DataPackage() {id = 9, name = "Nora", species = "Red-tailed wambenger", latinSpeciesName = "Phascogale calura", gender = "Female", slogan = "leverage e-business channels"},
                    new DataPackage() {id = 10, name = "Pammi", species = "Emerald green tree boa", latinSpeciesName = "Boa caninus", gender = "Female", slogan = "embrace web-enabled synergies"},
                    new DataPackage() {id = 11, name = "Lorelei", species = "Kingfisher, pied", latinSpeciesName = "Ceryle rudis", gender = "Female", slogan = "scale real-time relationships"},
                    new DataPackage() {id = 12, name = "Alonzo", species = "Savannah deer", latinSpeciesName = "Mazama gouazoubira", gender = "Male", slogan = "utilize one-to-one networks"},
                    new DataPackage() {id = 13, name = "Lilli", species = "Helmeted guinea fowl", latinSpeciesName = "Numida meleagris", gender = "Female", slogan = "innovate frictionless mindshare"},
                    new DataPackage() {id = 14, name = "Susannah", species = "Moose", latinSpeciesName = "Alces alces", gender = "Female", slogan = "aggregate strategic mindshare"},
                    new DataPackage() {id = 15, name = "Douglass", species = "Pie, indian tree", latinSpeciesName = "Dendrocitta vagabunda", gender = "Male", slogan = "enable end-to-end communities"},
                    new DataPackage() {id = 16, name = "Arabel", species = "Nine-banded armadillo", latinSpeciesName = "Dasypus novemcinctus", gender = "Female", slogan = "strategize granular models"},
                    new DataPackage() {id = 17, name = "Townie", species = "African black crake", latinSpeciesName = "Limnocorax flavirostra", gender = "Male", slogan = "streamline seamless technologies"},
                    new DataPackage() {id = 18, name = "Noach", species = "European wild cat", latinSpeciesName = "Felis silvestris lybica", gender = "Male", slogan = "architect out-of-the-box solutions"},
                    new DataPackage() {id = 19, name = "Kelbee", species = "Blacksmith plover", latinSpeciesName = "Vanellus armatus", gender = "Male", slogan = "aggregate magnetic ROI"},
                    new DataPackage() {id = 20, name = "Tillie", species = "Lilac-breasted roller", latinSpeciesName = "Coracias caudata", gender = "Female", slogan = "harness enterprise functionalities"},
                    new DataPackage() {id = 21, name = "Willard", species = "Barbet, levaillant's", latinSpeciesName = "Trachyphonus vaillantii", gender = "Male", slogan = "aggregate leading-edge initiatives"},
                    new DataPackage() {id = 22, name = "Katherine", species = "Dog, raccoon", latinSpeciesName = "Nyctereutes procyonoides", gender = "Female", slogan = "transition synergistic schemas"},
                    new DataPackage() {id = 23, name = "Adoree", species = "Starling, cape", latinSpeciesName = "Lamprotornis nitens", gender = "Female", slogan = "brand seamless functionalities"},
                    new DataPackage() {id = 24, name = "Riannon", species = "Ground monitor (unidentified)", latinSpeciesName = "Varanus sp.", gender = "Female", slogan = "leverage clicks-and-mortar bandwidth"},
            };
            
            return DataList;

        }
    }
}
