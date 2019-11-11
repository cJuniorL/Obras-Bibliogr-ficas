using ObrasApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ObrasApi.Service
{
  public class FormataNomeService
  {

    public List<NomeFormatacao> FormatarNomes(List<NomeFormatacao> lstNomeFormatacao)
    {
      for (int i = 0; i < lstNomeFormatacao.Count; i++)
      {
        lstNomeFormatacao[i].Nome = FormatarNome(lstNomeFormatacao[i].Nome);
      }

      return lstNomeFormatacao;
    }

    public string FormatarNome(string nome)
    {
      List<string> lstTodosNomes = SepararNome(nome);
      string nomeFormatado = "";

      if (lstTodosNomes.Count > 0)
      {
   

        nomeFormatado = FormatarUltimoNome(lstTodosNomes);
        if (lstTodosNomes.Count > 0)
          nomeFormatado += ", " + FormatarNomesInicias(lstTodosNomes);
      }

      return nomeFormatado;
    }

    private string FormatarNomesInicias(List<string> lstTodosNome)
    {
      string nomesIniciais = "";
      string match = "@(da)|(de)|(dos)|(das)|(dos)";

      for (int i = 0; i < lstTodosNome.Count; i++)
      {
        string nome = lstTodosNome[i]; 


        if (Regex.IsMatch(nome, match))
        {
          nomesIniciais += nome.ToLower();
        }
        else
        {
          nomesIniciais += nome.Substring(0, 1).ToUpper() + nome.Substring(1, nome.Length - 1).ToLower();
        }

        if (i < lstTodosNome.Count - 1)
        {
          nomesIniciais += " ";
        }
      }

      return nomesIniciais;
    }

    private string FormatarUltimoNome(List<string> lstTodosNome)
    {
      string ultimoNome = "";

      string match = "@(FILHO)|(FILHA)|(NETO)|(NETA)|(SOBRINHO)|(SOBRINHA)|(JUNIOR)";

      if (Regex.IsMatch(lstTodosNome.Last().ToUpper(), match) && lstTodosNome.Count > 2)
      {
        ultimoNome = lstTodosNome[lstTodosNome.Count - 2].ToUpper() + " " + lstTodosNome[lstTodosNome.Count - 1].ToUpper();
        lstTodosNome.RemoveRange(lstTodosNome.Count - 2, 2);
      }
      else
      {
        ultimoNome = lstTodosNome[lstTodosNome.Count - 1].ToUpper();
        lstTodosNome.RemoveAt(lstTodosNome.Count - 1);
      }

      return ultimoNome;
    }

    private List<string> SepararNome(string nome)
    {
      return Regex.Matches(nome, @"(\S+)").Select(m => m.Value).ToList();
    }

  }
}
