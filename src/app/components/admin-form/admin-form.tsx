import { CatalogItemType } from "@store/reducers/reducerCatalog";
import React from "react";
import Select from "react-select";
import styles from "./admin-form.module.css";

interface PropsType {
  item?: CatalogItemType | null;
  toRerender: () => void;
  actionType: string;
}

const AdminForm: React.FC<PropsType> = ({ item, toRerender, actionType }) => {
  const [title, setTitle] = React.useState(item?.title);
  const [image, setImage] = React.useState("");
  const [code, setCode] = React.useState("");
  const [brend, setBrend] = React.useState("");
  const [manufacturer, setManufacturer] = React.useState("");
  const [descriptionShort, setDescriptionShort] = React.useState("");
  const [descriptionFull, setDescriptionFull] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [sizeType, setSizeType] = React.useState("");
  const [sizeValue, setSizeValue] = React.useState("");
  const [usage, setUsage] = React.useState("");

  React.useEffect(() => {
    setTitle(item?.title);
    setImage(item?.img ?? "https://i.ibb.co/b6c6Lrq/image-21-2.png");
    setCode(item?.code);
    setBrend(item?.brend);
    setPrice(String(item?.price));
    setManufacturer(item?.manufacturer);
    setDescriptionFull(item?.description.big);
    setDescriptionShort(item?.description.small);
    setSizeType(item?.size.type);
    setSizeValue(item?.size.value);
    setUsage(item?.for?.join(" "));
  }, [item, actionType]);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValues = [
      title,
      image,
      code,
      manufacturer,
      brend,
      descriptionShort,
      descriptionFull,
      price,
      sizeType,
      sizeValue,
      usage,
    ];

    for (const value of inputValues) {
      if (Array.isArray(value)) {
        if (!value.length) return;
      }

      if (!value || !value.trim()) return;
    }

    const item = {
      title: title,
      img: image,
      code: code,
      brend: brend,
      price: Number(price),
      manufacturer: manufacturer,
      description: {
        small: descriptionShort,
        big: descriptionFull,
      },
      size: {
        value: sizeValue,
        type: sizeType,
      },
      for: usage.split(" "),
    };
    const itemJSON = JSON.stringify(item);
    const firstItemToLocalStorage = {};
    firstItemToLocalStorage[code] = itemJSON;

    const localStoreItems = JSON.parse(localStorage.getItem("sultan-store-kim"));
    if (localStoreItems) {
      localStoreItems[code] = itemJSON;
      localStorage.setItem("sultan-store-kim", JSON.stringify(localStoreItems));
    } else {
      localStorage.setItem("sultan-store-kim", JSON.stringify(firstItemToLocalStorage));
    }

    toRerender();
    if (actionType === "add") {
      setTitle("");
      setImage("https://i.ibb.co/b6c6Lrq/image-21-2.png");
      setCode("");
      setBrend("");
      setPrice("");
      setManufacturer("");
      setDescriptionFull("");
      setDescriptionShort("");
      setSizeType("");
      setSizeValue("");
      setUsage("");
    }
  };

  const forOptions = [
    { label: "За телом ", value: "body" },
    { label: "За руками ", value: "hands" },
  ];

  const sizeTypeOptions = [
    { label: "Вес", value: "weight" },
    { label: "Объем", value: "volume" },
  ];

  return (
    <form onSubmit={onHandleSubmit} className={styles["form-wrapper"]}>
      <h4>ВСЕ поля должный быть заполенены</h4>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-title">Название:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-title"
          type="text"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-image">Картинка:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-image"
          type="text"
          value={
            actionType === "change" && !image
              ? ""
              : image ?? "https://i.ibb.co/b6c6Lrq/image-21-2.png"
          }
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-code">Штрихкод:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-code"
          type="number"
          value={code ?? ""}
          disabled={item?.code ? true : false}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-brend">Бренд:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-brend"
          type="text"
          value={brend ?? ""}
          onChange={(e) => setBrend(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-manufacture">Производитель:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-manufacture"
          type="text"
          value={manufacturer ?? ""}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-description-short">Описание краткое::</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-description-short"
          type="text"
          value={descriptionShort ?? ""}
          onChange={(e) => setDescriptionShort(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-description-full">Описание полное:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-description-full"
          type="text"
          value={descriptionFull ?? ""}
          onChange={(e) => setDescriptionFull(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-price">Цена:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-price"
          type="number"
          value={price ?? ""}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-size-type">Размер тип:</label>

        <Select
          id="admin-size-type"
          onChange={(data) => setSizeType(data.value)}
          options={sizeTypeOptions}
          isSearchable={false}
          value={sizeTypeOptions.find((i) => i.value === sizeType) ?? null}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "250px",
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }),
          }}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-size-value">Размер значение:</label>
        <input
          autoComplete="off"
          className={styles["form-input"]}
          id="admin-size-value"
          type="text"
          value={sizeValue ?? ""}
          onChange={(e) => setSizeValue(e.target.value)}
        />
      </div>
      <div className={styles["form-option"]}>
        <label htmlFor="admin-for">Тип ухода:</label>
        <Select
          onChange={(data: { label: string; value: string }[]) =>
            setUsage(data.map((i) => i.value).join(" "))
          }
          options={forOptions}
          isMulti
          isSearchable={false}
          value={usage?.split(" ").map((i) => forOptions.find((opt) => opt.value === i)) || null}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "250px",
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }),
          }}
        />
      </div>
      <input className={styles["form-input"]} type="submit" value="Отправить" />
    </form>
  );
};

export default AdminForm;
