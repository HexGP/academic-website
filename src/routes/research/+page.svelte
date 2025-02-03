<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  </script>
  
  <Nav />
  
  <main class="container py-12">
    <h1 class="text-4xl font-bold mb-8">Research</h1>
    
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-semibold mb-6">Current Projects</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                [Project description and objectives]
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
  
      <div>
        <h2 class="text-2xl font-semibold mb-6">Past Projects</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Beta</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                [Previous research summary]
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </main>
  
  <Footer />