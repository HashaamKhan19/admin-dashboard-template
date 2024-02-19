/* eslint-disable react/prop-types */
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const DeleteModal = ({ row, type }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" size="small" className="p-1">
            Delete {type}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={"text-center uppercase"}>
              Delete {type}?
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="px-2 py-4 text-center text-muted-foreground">
            {type === "user" ? (
              <p>
                Are you sure you want to delete the user {row.getValue("name")}?
                This action cannot be undone!
              </p>
            ) : (
              <p>
                Are you sure you want to delete this report? This action cannot
                be undone!
              </p>
            )}
          </DialogDescription>

          <DialogFooter>
            <div className="flex flex-row w-full space-x-6">
              <DialogTrigger asChild>
                <Button className="w-full bg-red-800 hover:bg-red-700">
                  No
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button className="w-full bg-green-800 hover:bg-green-700">
                  Yes
                </Button>
              </DialogTrigger>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteModal;
