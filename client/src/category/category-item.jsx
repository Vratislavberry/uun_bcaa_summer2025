import { useContext } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";

import Icon from "@mdi/react";
import { mdiPencilOutline, mdiClose } from "@mdi/js";

import { CategoryListContext } from "./category-list-provider.jsx";

function CategoryItem({
  data,
  setCategoryItemFormData,
  setCategoryItemDeleteDialog,
}) {
  const { pendingId } = useContext(CategoryListContext);

  return (
    <ListGroup className="border-1" disabled={pendingId === data.id}>
      <ListGroup.Item variant="primary">
        <Stack direction="horizontal" gap={1}>
          {data.name}
          <div className="ms-auto">
            <Button
              className="border-0 p-1"
              variant="outline-primary"
              size="sm"
              onClick={() => setCategoryItemFormData(data)}
            >
              <Icon path={mdiPencilOutline} size={0.8} />
            </Button>
          </div>
          <div>
            <Button
              className="border-0 p-1"
              variant="outline-danger"
              size="sm"
              onClick={() => setCategoryItemDeleteDialog(data)}
            >
              <Icon path={mdiClose} size={0.8} />
            </Button>
          </div>
        </Stack>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CategoryItem;
