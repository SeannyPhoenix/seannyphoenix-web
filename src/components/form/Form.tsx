import { Vert } from "components/common";
import { useState } from "react";

type FormData = {
    name: string;
    color: string;
    place: string;
  };

export default function Form() {
    const [formData, setFormdata] = useState<FormData>({
        name: '',
        color: '',
        place: ''
      });
    
      const [savedData, setSavedData] = useState<FormData | null>(null);
    
      function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setFormdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }
    
      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSavedData(formData);
      }
        return  (
          <>
            <form onSubmit={handleSubmit}>
              <Vert>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                />
                <input
                  type="text"
                  placeholder="Color"
                  value={formData.color}
                  onChange={handleChange}
                  name="color"
                />
                <textarea
                  placeholder="Place"
                  value={formData.place}
                  onChange={handleChange}
                  name="place"
                />
                <button type="submit">Submit</button>
              </Vert>
            </form>
            <pre>{JSON.stringify({formdata: formData, savedData}, null, '  ')}</pre>
          </>
        )
}