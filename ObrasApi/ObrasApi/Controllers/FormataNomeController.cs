using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObrasApi.Models;
using ObrasApi.Service;

namespace ObrasApi.Controllers
{
  [Route("api/[Controller]")]
  public class FormataNomeController : Controller
  {
    private readonly FormataNomeService _formataNomeService;

    public FormataNomeController(FormataNomeService formataNomeService)
    {
      this._formataNomeService = formataNomeService;
    }

    [HttpPost]
    public List<NomeFormatacao> Formatar([FromBody] List<NomeFormatacao> nomesFormatacao)
    {
      return _formataNomeService.FormatarNomes(nomesFormatacao);
    }
  }
}
