import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewRestaurant() {
  return (
    <>
      <h1 className="text-xl font-bold mb-5">New Restaurant</h1>
      <form className="w-full max-w-[400px]">
        <div className="mb-5">
            <Label className="inline-block mb-2 font-medium">Title</Label>
          <Input />
        </div>
        <div className="mb-5">
        <Label className="inline-block mb-2 font-medium">Description</Label>
          <Textarea className="resize-none" />
        </div>
        <div className="mb-5">
        <Label className="inline-block mb-2 font-medium">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-5">
          <Button className="px-10 font-semibold">Add</Button>
        </div>
      </form>
    </>
  );
}
