import React, { useRef, useState, useEffect } from "react";
import Attach from "../../assets/images/icons/attach.png";
import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../config/Api";

function UpdateFilm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showMessage, setShowMessage] = useState(null)

  const [form, setForm] = useState({
    title: "",
    linkfilm: "",
    thumbnailfilm: "",
    year: "",
    category_id: "",
    description: "",
  });

  console.log(form);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const { data: categories } = useQuery("categoriesCache", async () => {
    const response = await API.get("/categories");
    return response.data.data;
  });

  useEffect(() => {
    const getform = async () => {
      try {
        const response = await API.get("/film/" + id);
        setForm({
          title: response.data.data.title,
          linkfilm: response.data.data.linkfilm,
          thumbnailfilm: "",
          year: response.data.data.year,
          category_id: response.data.data.category_id,
          description: response.data.data.description,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getform();
  }, [id]);

  const handleOnUpdate = useMutation(async (e) => {
    try {
      e.preventDefault();
      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("linkfilm", form.linkfilm);
      formData.set("thumbnailfilm", form.thumbnailfilm[0], form.thumbnailfilm[0].name);
      formData.set("year", form.year);
      formData.set("description", form.description);
      formData.set("category_id", Number(form.category_id));

      const succesAlert = (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Update Film Succes!</span>
          </div>
        </div>
      )

      // Update film data
      const response = await API.patch("/film/" + id, formData, config);
      setShowMessage(succesAlert)
      console.log("update film success : ", response);

      function redirectPage(){
        const timeoutId = setTimeout(() => {
          navigate("/dashboard")
        }, 2000)
        return () => clearTimeout(timeoutId)
      }
      redirectPage()

    } catch (error) {
      console.log("update film failed : ", error);

      const dangerAlert = (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Update Film Failed!</span>
          </div>
        </div>
      )

      setShowMessage(dangerAlert)

    }
  });

  const fileInputRefAttach = useRef(null);

  const handleClickAttach = () => {
    fileInputRefAttach.current.click();
  };

  return (
    <div className="bg-black w-screen h-screen">
      {/* <div className="bg-green-600 p-2 text-black">Update Succes!</div> */}

      {showMessage && showMessage}

      <form onSubmit={(e) => handleOnUpdate.mutate(e)} className="pt-6">
        <div className="mx-auto w-[620px] flex flex-col p-3 rounded-md">
          <h1 className="text-white font-semibold my-3">Update Film</h1>
          <div className="flex">
            <input
              onChange={handleOnChange}
              value={form.title}
              style={{ background: "rgba(210, 210, 210, 0.25)" }}
              className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <input
              onChange={handleOnChange}
              ref={fileInputRefAttach}
              hidden
              style={{ background: "rgba(210, 210, 210, 0.25)" }}
              className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white"
              type="file"
              name="thumbnailfilm"
              id="thumbnailfilm"
            />
            <div
              onClick={handleClickAttach}
              style={{ background: "rgba(210, 210, 210, 0.25)" }}
              className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white"
            >
              <h3>Attach Thumbnail</h3>
              <img src={Attach} alt="" />
            </div>
          </div>
          <input
            onChange={handleOnChange}
            value={form.linkfilm}
            style={{ background: "rgba(210, 210, 210, 0.25)" }}
            className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white"
            type="text"
            name="linkfilm"
            id="linkfilm"
            placeholder="Link Film"
          />
          <input
            onChange={handleOnChange}
            value={form.year}
            style={{ background: "rgba(210, 210, 210, 0.25)" }}
            className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white"
            type="number"
            name="year"
            id="year"
            placeholder="Year"
          />

          <select
            onChange={handleOnChange}
            value={form.category_id}
            name="category_id"
            id="category_id"
            style={{ background: "rgba(210, 210, 210, 0.25)" }}
            className="p-2 mb-3 rounded-[3px] text-white border-white border-[1px] "
          >
            <option disabled hidden value="">
              Categories
            </option>

            {categories?.map((item) => (
              <option
                style={{ background: "rgba(210, 210, 210, 0.25)" }}
                className="text-black"
                name={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>

          <textarea
            onChange={handleOnChange}
            value={form.description}
            style={{ background: "rgba(210, 210, 210, 0.25)" }}
            className="p-2 mb-4 rounded-[3px] border-white border-[1px] text-white"
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />

          <div className="">
            <button
              type="submit"
              className="p-2 bg-red-700 rounded-md w-[200px] float-right text-white font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateFilm;
