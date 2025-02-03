<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "$lib/components/ui/table";
  import { siteConfig } from "$lib/config/site";
</script>

<svelte:head>
  <title>{siteConfig.name}</title>
</svelte:head>

<Nav />

<main class="container mx-auto py-12">
  <!-- Hero Section with Video -->
  <div class="mb-16 text-center">
    <h1 class="text-5xl font-bold tracking-tight mb-4">{siteConfig.name}</h1>
    <p class="text-xl text-muted-foreground mx-auto max-w-2xl mb-8">
      {siteConfig.description}
    </p>
    
    <!-- Video Embed replace with video ID -->
    <div class="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        class="w-full h-full"
        title="Research Overview Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>

  <!-- Research Section -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">Research Highlights</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>AI Ethics Framework</CardTitle>
          <CardDescription>2023 - Present</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">
            Developing ethical guidelines for generative AI systems.
          </p>
        </CardContent>
        <CardFooter>
          <a href="/research" class="w-full">
            <Button variant="outline" class="w-full">View Details</Button>
          </a>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quantum Machine Learning</CardTitle>
          <CardDescription>2022 - 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">
            Investigating quantum computing applications.
          </p>
        </CardContent>
        <CardFooter>
          <a href="/research" class="w-full">
            <Button variant="outline" class="w-full">Explore Project</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>

  <!-- Publications Section -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8">Recent Publications</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Journal</TableHead>
          <TableHead class="text-right">Impact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>2023</TableCell>
          <TableCell class="font-medium">Ethical AI Development</TableCell>
          <TableCell>Nature AI</TableCell>
          <TableCell class="text-right">18.6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2022</TableCell>
          <TableCell class="font-medium">Quantum Neural Networks</TableCell>
          <TableCell>Science Robotics</TableCell>
          <TableCell class="text-right">25.8</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <h2 class="text-3xl font-bold mb-8">Contact</h2>
    <div class="mx-auto max-w-2xl">
      <form class="space-y-6">
        <div class="grid gap-6 md:grid-cols-2">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <Input type="email" placeholder="Email" />
        <Input placeholder="Subject" />
        <Textarea placeholder="Message"/>
        <Button class="w-full" type="submit">Send Message</Button>
      </form>
    </div>
  </section>
</main>

<Footer />