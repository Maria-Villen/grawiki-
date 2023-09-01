import { BasicButton, Icon } from "../../../ui";

const ArticleDetail = () => {
  const handleEditArticle = () => {
    console.log("Edit Article");
  };

  const handleDeleteArticle = () => {
    console.log("Delete Article");
  };

  return (
    <div>
      <div>
        <div>
          <Icon name="Writing3DIcon" />
          <span className="writers-quantity">25</span>
          escritores
        </div>
        <span>
          Ultima versión <span>03/03/2022</span>
        </span>
      </div>
      <div>
        <BasicButton
          category="primary"
          label="Editar"
          icon={{ name: "PencilIcon" }}
          onClick={handleEditArticle}
        />
        <BasicButton
          category="secondary"
          label="Eliminar"
          icon={{ name: "TrashIcon" }}
          onClick={handleDeleteArticle}
        />
      </div>
    </div>
  );
};

export default ArticleDetail;
