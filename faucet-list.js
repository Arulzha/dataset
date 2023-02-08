
      // JSON data dengan daftar faucet cryptocurrency
      var faucets = {
        "faucets": [
          {
            "nama_situs": "VIEFAUCET",
            "tipe": ["Faucet", "PTC"],
            "minimal_penarikan": 1,
            "link": "https://viefaucet.com?r=61e83cfb5cc8356fa4bc7bed"
          },
		  {
            "nama_situs": "EARNBITMOON",
            "tipe": ["Faucet", "PTC"],
            "minimal_penarikan": 2000,
            "link": " https://earnbitmoon.club/?ref=84128"
          },
{
            "nama_situs": "Adbtc",
            "tipe": ["PTC"],
            "minimal_penarikan": 500,
            "link": "https://r.adbtc.top/1556287"
          },
{
            "nama_situs": "FAUCETS4U",
            "tipe": ["Faucet", "PTC"],
            "minimal_penarikan": 1,
            "link": "https://faucet4u.com/?r=3598"
          },
        ]
      };

      // Fungsi untuk menambahkan data faucet ke dalam tabel
      function addFaucetToTable(faucet) {
        var faucetList = document.getElementById("faucet-list");
        var row = document.createElement("tr");

        var namaSitusCell = document.createElement("td");
        namaSitusCell.textContent = faucet.nama_situs;
        row.appendChild(namaSitusCell);

        var tipeCell = document.createElement("td");
        var tipeList = document.createElement("ul");
        for (var i = 0; i < faucet.tipe.length; i++) {
          var tipeListItem = document.createElement("li");
          tipeListItem.textContent = faucet.tipe[i];
          tipeList.appendChild(tipeListItem);
        }
        tipeCell.appendChild(tipeList);
        row.appendChild(tipeCell);

        var minimalPenarikanCell = document.createElement("td");
        minimalPenarikanCell.textContent = faucet.minimal_penarikan;
        row.appendChild(minimalPenarikanCell);

        var linkCell = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = "Visit Site";
        button.addClass = "button";
        button.onclick = function() {
          window.location.href = faucet.link;
        };
        linkCell.appendChild(button);
        row.appendChild(linkCell);

        faucetList.appendChild(row);
      }

      // Loop melalui daftar faucet dan menambahkan setiap faucet ke dalam tabel
      for (var i = 0; i < faucets.faucets.length; i++) {
        addFaucetToTable(faucets.faucets[i]);
      }
