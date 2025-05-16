import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

function Main() {
  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Rappitours</h1>
      <p className="text-lg mb-4">Explore the world with us. Your adventure starts here.</p>

      <Tabs defaultValue="destinations" className="w-full max-w-2xl">
        <TabsList>
          <TabsTrigger value="destinations">Destinations</TabsTrigger>
          <TabsTrigger value="tours">Tours</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="destinations">
          <Card className="p-4">Discover amazing destinations around the globe.</Card>
        </TabsContent>
        <TabsContent value="tours">
          <Card className="p-4">Find the perfect tour for your next adventure.</Card>
        </TabsContent>
        <TabsContent value="contact">
          <Card className="p-4">Get in touch with us for more information.</Card>
        </TabsContent>
      </Tabs>

      <Button className="mt-6">Get Started</Button>
    </div>
  );
}

export default Main;