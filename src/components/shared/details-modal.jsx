/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const DetailsModal = ({ row, type }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="small" className="p-1">
          View {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={"text-center uppercase"}>
            {type} Details
          </DialogTitle>
          <DialogDescription className={"text-center py-4 px-2"}>
            {row.getValue("details") || "No details available!"}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
