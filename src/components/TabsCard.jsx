import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarsIcon } from "./Icons";

const TabsCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center">
            <CardTitle className="pe-3">Arlene McCoy</CardTitle>
            <StarsIcon />
          </div>
          <p className="text-[12px] font-medium">2 months ago</p>
        </div>
        <div className="flex gap-3 pt-2">
          <Badge>Coffee Bean</Badge>
          <Badge>Malerapaso</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-[16px] font-normal text-[#818181]">
          Keep the soil evenly moist for the healthiest growth. If the sun gets
          too hot, Chinese cabbage tends to "bolt" or go to seed; in long
          periods of heat, some kind of shade may be helpful. Watch out for
          snails, as they will harm the plants.
        </p>
      </CardContent>
    </Card>
  );
};

export default TabsCard;
