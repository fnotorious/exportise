/*
const fetchExportData = async(id, country, iMode, year, cMode) => {
    setTimeout( async() => {
      await fetch(`http://localhost:3001/api/data?country=${codes[country]}&flow=${iMode ? 'M' : 'X'}&year=${year}&cMode=${cMode}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        id === 1 ? setTimeLoading(false) : setTimeLoading2(false);
        id === 1 ? setChartLoading(false) : setChartLoading2(false);

        if (data.count === 0 && id === 1) {
          setShowError(true);
        }

        else if (data.count > 0 && id === 1) {
          setShowError2(false);
        }

        if (data.count === 0 && id === 2) {
          setShowError2(true);
        }

        else if (data.count > 0 && id === 2) {
          setShowError2(false);
        }

        return data;
      })
      .catch(error => console.error(error));
    }, 6000)
  };

  const makeChartData = async() => {
    console.log('calling debounceExportData(1)');
    const data1 = await fetchExportData(1, props.countryOne, importsMode, year1, countryMode);
    console.log('data1:', data1);

    await new Promise(resolve => setTimeout(resolve, 6000));
    
    console.log('calling debounceExportData(2)');
    const data2 = await fetchExportData(2, props.countryTwo, importsMode2, year2, countryMode2);
    console.log('data2:', data2);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSendReq(false);
    setChartData(data1, data2);
  }

  useEffect(() => {
    if (sendReq) {
      new Promise(resolve => setTimeout(resolve, 1000));;
      makeChartData();
      console.log(chartData);
    }
  
    if (!firstRun && sendReq) {
      return () => {
      };
    } else {
      setFirstRun(false);
    }
  }, [sendReq, props.countryOne, props.countryTwo, importsMode, importsMode2, countryMode, countryMode2, year1, year2]);
  */