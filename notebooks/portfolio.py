# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "marimo",
#     "pandas",
#     "plotly",
# ]
# ///

import marimo

__generated_with = "0.23.16"
app = marimo.App(width="medium")


@app.cell
def _():
    import marimo as mo

    return (mo,)


@app.cell
def _(mo):
    tab_about = mo.md("""
    ## Iftikhar Ali Hussaini
    ### Aspiring Auditor | Accounting & Finance Student

    ---

    #### 📝 Personal Summary

    Finance and accounting student at Bayes Business School with experience in financial operations, investment research, and team leadership. Strong interest in sustainable finance, climate transition, and how capital can support long-term commercial growth and decarbonisation. Proven ability to manage team responsibilities, coordinate research tasks, and solve commercial problems through data-driven analysis, demonstrated through equity research on Rolls-Royce Holdings plc.

    #### 💼 Experience

    **Assistant Accountant** — Gypsy Hill Federation
    *July 22nd – August 18th 2025, London, UK*
    * Assisted with processing invoices and updating financial records
    * Helped with basic reconciliations and filing
    * Shadowed senior accountants to understand financial reporting processes

    **Teaching Assistant** — Sanza Teaching
    *December 12th – Present, London, UK*
    * Communicated clearly with SEN students, classmates, and parents
    * Adapted support to different learning needs
    * Created and presented interactive lessons

    #### 🏆 Leadership Experience

    **Project Manager** — Bayes Business School
    *September 28th – Present, London, UK*
    * Led research on the guilds of the City of London, delegating tasks and tracking progress
    * Led my team to pitch an investment case on Rolls-Royce Holdings PLC to investors

    #### 🎓 Education

    * **City University of London** — Accounting and Finance, 2024 – Present
    * A-Level: Mathematics (C), Sociology (C), Physical Education (C)
    * GCSEs: Mathematics (8), English Language (6), English Literature (8), Science (66)

    #### 🛠️ Skills

    * Financial research and data-driven analysis
    * Team leadership and project coordination
    * Basic Python coding
    """)
    return (tab_about,)


@app.cell
def _():
    import plotly.express as px
    import pandas as pd

    return pd, px


@app.cell
def _(pd):
    csv_url = "https://gist.githubusercontent.com/DrAYim/80393243abdbb4bfe3b45fef58e8d3c8/raw/ed5cfd9f210bf80cb59a5f420bf8f2b88a9c2dcd/sp500_ZScore_AvgCostofDebt.csv"

    df = pd.read_csv(csv_url)
    df = df.dropna(subset=['AvgCost_of_Debt', 'Z_Score_lag', 'Sector_Key'])
    df = df[df['AvgCost_of_Debt'] < 5]
    df['Debt_Cost_Percent'] = df['AvgCost_of_Debt'] * 100
    df['Market_Cap_B'] = df['Market_Cap'] / 1e9
    all_sectors = sorted(df['Sector_Key'].unique().tolist())
    return all_sectors, df


@app.cell
def _(all_sectors, mo):
    sector_filter = mo.ui.multiselect(
        options=all_sectors,
        value=all_sectors[:3],
        label="Filter by Sector"
    )

    cap_filter = mo.ui.slider(
        start=0, stop=200, step=10, value=0,
        label="Min Market Cap ($ Billions)"
    )

    mo.hstack([sector_filter, cap_filter])
    return cap_filter, sector_filter


@app.cell
def _(cap_filter, df, mo, px, sector_filter):
    filtered_df = df[
        (df['Sector_Key'].isin(sector_filter.value)) &
        (df['Market_Cap_B'] >= cap_filter.value)
    ]
    audit_risk_count = len(filtered_df)

    fig_risk = px.scatter(
        filtered_df,
        x='Z_Score_lag',
        y='Debt_Cost_Percent',
        color='Sector_Key',
        size='Market_Cap_B',
        hover_name='Name',
        title=f"Going-Concern Risk Screen: Z-Score vs. Cost of Debt ({audit_risk_count} companies)",
        labels={'Z_Score_lag': 'Altman Z-Score (going-concern indicator)', 'Debt_Cost_Percent': 'Avg. Cost of Debt (%)'},
        template='presentation',
        width=900, height=600
    )

    fig_risk.add_vline(x=1.81, line_dash="dash", line_color="red",
        annotation=dict(text="Distress Zone (Z < 1.81)", font=dict(color="red"), x=1.5, xref="x", y=1.07, yref="paper", showarrow=False))

    fig_risk.add_vline(x=2.99, line_dash="dash", line_color="green",
        annotation=dict(text="Safe Zone (Z > 2.99)", font=dict(color="green"), x=3.1, xref="x", y=1.02, yref="paper", showarrow=False))

    chart_element = mo.ui.plotly(fig_risk)
    tab_projects = mo.vstack([
        mo.md("## 📊 Audit Risk Screening Tool"),
        mo.callout(
            mo.md("This tool applies the Altman Z-Score — a real metric used in audit work to assess **going concern risk** — to screen S&P 500 companies for financial distress signals alongside their cost of debt."),
            kind="info"
        ),
        mo.hstack([sector_filter, cap_filter], justify="center", gap=2),
        chart_element
    ])
    tab_projects
    return (tab_projects,)


@app.cell
def _():
    import plotly.graph_objects as go

    return (go,)


@app.cell
def _():
    genres = ['Hip-Hop / Trap', 'R&B', 'UK Rap', 'Brit Rock / Indie Classics', 'Afrobeats / Dancehall / Latin', 'Pop / Dance']
    scores = [9, 8, 7, 7, 5, 5]
    return genres, scores


@app.cell
def _(genres, go, mo, scores):
    fig_taste = go.Figure()

    fig_taste.add_trace(go.Scatterpolar(
        r=scores + [scores[0]],
        theta=genres + [genres[0]],
        fill='toself',
        name='My Music Taste',
        line=dict(color='#1DB954', width=3),
        fillcolor='rgba(29, 185, 84, 0.3)'
    ))

    fig_taste.update_layout(
        polar=dict(
            radialaxis=dict(visible=True, range=[0, 10])
        ),
        showlegend=False,
        title="My Music Taste Fingerprint",
        template='presentation',
        width=700, height=600
    )

    taste_chart = mo.ui.plotly(fig_taste)
    return (taste_chart,)


@app.cell
def _(mo, taste_chart):
    tab_personal = mo.vstack([
        mo.md("## 🎧 My Music Taste"),
        mo.md("A breakdown of my listening habits, pulled from my Spotify playlist — spanning everything from UK rap to Brit rock classics."),
        taste_chart,
        mo.md("""
    ### 🎵 Favourite Songs

    * **I'm On My Way** — The Proclaimers
    * **Call Out My Name** — The Weeknd
    * **Can I** — Drake
    * **King** — Olly Alexander
    * **All I Wanted** — Paramore
    """)
    ])
    return (tab_personal,)


@app.cell
def _(mo, tab_about, tab_personal, tab_projects):
    app_tabs = mo.ui.tabs({
        "📄 About Me": tab_about,
        "📊 Passion Projects": tab_projects,
        "🎧 Personal Interests": tab_personal
    })

    mo.md(f"""
    **Iftikhar Ali Hussaini**
    ---
    {app_tabs}
    """)
    return


if __name__ == "__main__":
    app.run()
