<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  </script>
  
  <Nav />
  
  <main class="container py-12">
    <h1 class="text-4xl font-bold mb-8">Code & Projects</h1>
    
    <div class="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Project Repository</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <p class="text-muted-foreground">
              [GitHub repository link]
            </p>
            <p class="text-sm text-muted-foreground">
              Technologies: Python, PyTorch, TensorFlow
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </main>
  
  <Footer />