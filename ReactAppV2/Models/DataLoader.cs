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

            StreamReader reader = new StreamReader(File.OpenRead(@"..\\ReactAppV2\\wwwroot\\database\\databasedata.txt"));


            string line;


            List<DataPackage> DataList = new List<DataPackage>();

            while ((line = reader.ReadLine()) != null)
            {
                String[] tokens = line.Split(';');
                DataPackage d = new DataPackage();

                d.id = Convert.ToInt32(tokens[0]);
                d.name = tokens[1];
                d.species = tokens[2];
                d.latinSpeciesName = tokens[3];
                d.gender = tokens[4];
                d.slogan = tokens[5];

                DataList.Add(d);

            }

            reader.Close();

            return DataList;

        }
    }
}
