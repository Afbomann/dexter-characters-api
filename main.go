package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

type Character struct {
	Id        string
	FirstName string
	LastName  string
}

func GetCharacterById(Characters []Character, Id string) *Character {
	for _, v := range Characters {
		if v.Id == Id {
			return &v
		}
	}

	return nil
}

func main() {
	Content, Err := os.ReadFile("./characters.json")

	if Err != nil {
		log.Fatal("Error while reading json file: ", Err)
	}

	var Characters []Character
	Err = json.Unmarshal(Content, &Characters)

	if Err != nil {
		log.Fatal("Error while unmarshaling json content: ", Err)
	}

	Mux := http.NewServeMux()

	Mux.HandleFunc("/characters", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(200)
		json.NewEncoder(w).Encode(Characters)
	})

	Mux.HandleFunc("/character/{id}", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		Id := r.PathValue("id")

		if Id == "" {
			w.WriteHeader(400)
			json.NewEncoder(w).Encode(nil)
			return
		}

		CharacterFound := GetCharacterById(Characters, Id)

		if CharacterFound == nil {
			w.WriteHeader(404)
			json.NewEncoder(w).Encode(nil)
			return
		}

		w.WriteHeader(200)
		json.NewEncoder(w).Encode(CharacterFound)
	})

	http.ListenAndServe(":3001", Mux)
}
