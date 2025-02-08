<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { Card, CardHeader, CardTitle, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
</script>

<Nav />

<main class="container py-12">
  <h1 class="text-4xl font-bold mb-8">About PVAMU Research</h1>

  <div class="prose max-w-4xl">
    <div class="space-y-8">
      <!-- Research Focus Section -->
      <section>
        <h2 class="text-3xl font-semibold mb-6">Core Research Areas</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>AI Ethics & Safety</CardTitle>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="secondary">Ongoing</Badge>
                <Badge variant="outline">2021-Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                Developing frameworks for responsible AI deployment in healthcare systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quantum Machine Learning</CardTitle>
              <div class="flex gap-2 flex-wrap">
                <Badge variant="secondary">Collaborative</Badge>
                <Badge variant="outline">2023-2026</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground">
                Hybrid classical-quantum algorithms for optimization problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <!-- Methodologies Section -->
      <section>
        <h2 class="text-3xl font-semibold mb-6">Key Methodologies</h2>
        <div class="grid gap-4 md:grid-cols-3">
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium mb-2">Deep Learning</h3>
            <p class="text-sm text-muted-foreground">
              Transformer architectures, Reinforcement Learning
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium mb-2">Statistical Modeling</h3>
            <p class="text-sm text-muted-foreground">
              Bayesian networks, Causal inference
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium mb-2">Quantum Computing</h3>
            <p class="text-sm text-muted-foreground">
              Qiskit, Quantum circuit optimization
            </p>
          </div>
        </div>
      </section>

      <!-- Research Timeline -->
      <section>
        <h2 class="text-3xl font-semibold mb-6">Research Timeline</h2>
        <div class="space-y-4">
          <div class="border-l-2 pl-4 relative">
            <div class="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-5">
              <h3 class="font-medium">2023-Present</h3>
              <p class="text-muted-foreground">
              NSF-funded project on ethical AI frameworks
              </p>
            </div>
          <div class="border-l-2 pl-4 relative">
            <div class="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-5">
            <h3 class="font-medium">2021-2023</h3>
            <p class="text-muted-foreground">
              DARPA challenge on quantum machine learning benchmarks
            </p>
          </div>
        </div>
      </section>

      <!-- Collaborations -->
      <section>
        <h2 class="text-3xl font-semibold mb-6">Collaborations</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium mb-2">Industry Partners</h3>
            <ul class="text-sm text-muted-foreground space-y-1">
              <li>• Google AI Ethics Board</li>
              <li>• IBM Quantum Research</li>
              <li>• OpenAI Safety Initiative</li>
            </ul>
          </div>
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium mb-2">Academic Institutions</h3>
            <ul class="text-sm text-muted-foreground space-y-1">
              <li>• MIT CSAIL</li>
              <li>• Stanford HAI</li>
              <li>• ETH Zurich</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</main>

<Footer />