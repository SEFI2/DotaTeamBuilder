#include <bits/stdc++.h>
using namespace std;


string keyWords [] = {"Bad against..." , "Good against..." , "Works well with..."};
string notKey [] = {"Bad" , "Good" , "Works"};
string tp[] = {"Strength" , "Agility" , "Intelligence"};
vector<string> Heroes[3];
int used[300] = {0};
int keynow = -1;
int j = 0;

int dicting = 0;
string nameofhero = "Ogre_Magi";

int main (){

    ifstream finList ("ListOfHeroes.txt");
    ifstream finTXT ("EarthshakerCode.txt");
    ofstream fileOut("AllHeroesHierarchy.txt" , ios_base::app);
    fileOut << ",\n";

    string someWord = "";

    keynow = 0;

    while (getline(finList , someWord)) {
        if (someWord.length() == 0)keynow ++;
        else Heroes[keynow].push_back(someWord);
    }

        fileOut << "{\n";
    fileOut << "    \"name\":\"Dota2\",\n";
    fileOut << "    \"children\":\n";
    fileOut << "    [\n";

    for (int i = 0 ; i < 3 ; ++i) {
        fileOut << "        {\n";
        fileOut << "        \"name\":" << "\"" <<tp[i] <<"\""<< "\n";
        fileOut << "        ,\n";
        fileOut << "        \"children\":\n";
        fileOut << "        [";
            for (int j = 0 ; j < Heroes[i].size() ; ++j) {
                if (Heroes[i][j].length() == 0)continue;
                fileOut << "            {\n";
                    fileOut << "            \"name\":" <<"\"" << Heroes[i][j] << "\"\n";
                fileOut << "            }\n";
                if (j < Heroes[i].size() - 1)
                    fileOut << "            ,\n";
            }
        fileOut << "        ]";

        fileOut << "        },\n";

    }

    fileOut << "]";
    fileOut << "}";




    return 0;
}











//    fileOut << "{\n";
//    fileOut << "    \"name\":" <<"\"" <<nameofhero<<"\",\n";
//    int cnt = 0;
//
//    for (int i = 0 ; i < wholeFile.length() ; ++i) {
//
//        if (keynow >= 0) {
//            for (int j = 0 ; j < Heroes.size() ; ++j) {
//                if (Heroes[j].length() > 0&&used[j] == 0 && Heroes[j] != nameofhero && i+Heroes[j].length() < wholeFile.length() && Heroes[j] == wholeFile.substr(i , Heroes[j].length()))
//                {
//                    cnt ++;
//
//                    if (cnt > 1)
//                    fileOut << "            ,\n";
//
//                    used[j] = 1;
//                    fileOut << "            {\n";
//                    fileOut <<"             \"name\":"<< "\"" << Heroes[j] <<"\""<< "\n";
//                    fileOut << "            }\n";
//                }
//            }
//        }
//
//        if (keynow < 2 && i + keyWords[keynow + 1].length() < wholeFile.length() && keyWords[keynow + 1] == wholeFile.substr(i , keyWords[keynow + 1].length())) {
//            memset (used , 0 , sizeof used);
//            if (dicting == 0){
//                dicting ++;
//                continue;
//            }
//
//            if (keynow >= 0){
//                fileOut << "    ]\n";
//                fileOut << "    ,\n";
//            }
//            cnt = 0;
//
//            fileOut << "    \"" << notKey[keynow + 1] <<"\""<< ":\n";
//            fileOut << "    [\n";
//
//            keynow ++;
//        }
//
//    }
//    fileOut << "    ]\n";
//    fileOut << "}\n";
