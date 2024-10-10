import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ToDoListItem = ({ cardTitle, cardContent }: { cardTitle: String, cardContent: any }) => {
  return (

    <Card>
      <CardHeader>
        <CardTitle>cardTitle</CardTitle>
      </CardHeader>
      <CardContent>cardContent</CardContent>
    </Card>

  )
}
