using NUnit.Framework;
using ObrasApi.Service;

namespace Tests
{
  public class Tests
  {
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void TestarNome()
    {
      FormataNomeService formataNomeService = new FormataNomeService();
      string nomeFormatado = formataNomeService.FormatarNome("Carlos Roberto Rossini");
      Assert.AreEqual("ROSSINI, Carlos Roberto", nomeFormatado);
    }

    [Test]
    public void TestarNomeSobrenomeComplementar()
    {
      FormataNomeService formataNomeService = new FormataNomeService();
      string nomeFormatado = formataNomeService.FormatarNome("Carlos Roberto Rossini Junior");
      Assert.AreEqual("ROSSINI JUNIOR, Carlos Roberto", nomeFormatado);
    }

    [Test]
    public void TestarNomeSobrenomeComplementar2()
    {
      FormataNomeService formataNomeService = new FormataNomeService();
      string nomeFormatado = formataNomeService.FormatarNome("joao neto");
      Assert.AreEqual("NETO, Joao", nomeFormatado);
    }

    [Test]
    public void TestarNomeDe()
    {
      FormataNomeService formataNomeService = new FormataNomeService();
      string nomeFormatado = formataNomeService.FormatarNome("Celso de Araujo");
      Assert.AreEqual("ARAUJO, Celso de", nomeFormatado);
    }


    [Test]
    public void TestarNomeUnico()
    {
      FormataNomeService formataNomeService = new FormataNomeService();
      string nomeFormatado = formataNomeService.FormatarNome("Pedro");
      Assert.AreEqual("PEDRO", nomeFormatado);
    }

  }
}
