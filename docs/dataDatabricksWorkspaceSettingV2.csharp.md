# `dataDatabricksWorkspaceSettingV2` Submodule <a name="`dataDatabricksWorkspaceSettingV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceSettingV2 <a name="DataDatabricksWorkspaceSettingV2" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2 databricks_workspace_setting_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2(Construct Scope, string Id, DataDatabricksWorkspaceSettingV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config">DataDatabricksWorkspaceSettingV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config">DataDatabricksWorkspaceSettingV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy">PutAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains">PutAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAutomaticClusterUpdateWorkspace">PutAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putBooleanVal">PutBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putDefaultDataSecurityMode">PutDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy">PutEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains">PutEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace">PutEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveDefaultDataSecurityMode">PutEffectiveDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectivePersonalCompute">PutEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins">PutEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putIntegerVal">PutIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putPersonalCompute">PutPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putRestrictWorkspaceAdmins">PutRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putStringVal">PutStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy">ResetAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains">ResetAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace">ResetAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetBooleanVal">ResetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetDefaultDataSecurityMode">ResetDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy">ResetEffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains">ResetEffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace">ResetEffectiveAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveDefaultDataSecurityMode">ResetEffectiveDefaultDataSecurityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectivePersonalCompute">ResetEffectivePersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins">ResetEffectiveRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetIntegerVal">ResetIntegerVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetPersonalCompute">ResetPersonalCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetRestrictWorkspaceAdmins">ResetRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetStringVal">ResetStringVal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAibiDashboardEmbeddingAccessPolicy` <a name="PutAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void PutAibiDashboardEmbeddingAccessPolicy(DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

---

##### `PutAibiDashboardEmbeddingApprovedDomains` <a name="PutAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void PutAibiDashboardEmbeddingApprovedDomains(DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

---

##### `PutAutomaticClusterUpdateWorkspace` <a name="PutAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAutomaticClusterUpdateWorkspace"></a>

```csharp
private void PutAutomaticClusterUpdateWorkspace(DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

---

##### `PutBooleanVal` <a name="PutBooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putBooleanVal"></a>

```csharp
private void PutBooleanVal(DataDatabricksWorkspaceSettingV2BooleanVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal">DataDatabricksWorkspaceSettingV2BooleanVal</a>

---

##### `PutDefaultDataSecurityMode` <a name="PutDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putDefaultDataSecurityMode"></a>

```csharp
private void PutDefaultDataSecurityMode(DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putDefaultDataSecurityMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode</a>

---

##### `PutEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="PutEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void PutEffectiveAibiDashboardEmbeddingAccessPolicy(DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

---

##### `PutEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="PutEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void PutEffectiveAibiDashboardEmbeddingApprovedDomains(DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

---

##### `PutEffectiveAutomaticClusterUpdateWorkspace` <a name="PutEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
private void PutEffectiveAutomaticClusterUpdateWorkspace(DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

---

##### `PutEffectiveDefaultDataSecurityMode` <a name="PutEffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveDefaultDataSecurityMode"></a>

```csharp
private void PutEffectiveDefaultDataSecurityMode(DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveDefaultDataSecurityMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

---

##### `PutEffectivePersonalCompute` <a name="PutEffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectivePersonalCompute"></a>

```csharp
private void PutEffectivePersonalCompute(DataDatabricksWorkspaceSettingV2EffectivePersonalCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectivePersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute">DataDatabricksWorkspaceSettingV2EffectivePersonalCompute</a>

---

##### `PutEffectiveRestrictWorkspaceAdmins` <a name="PutEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins"></a>

```csharp
private void PutEffectiveRestrictWorkspaceAdmins(DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putEffectiveRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

---

##### `PutIntegerVal` <a name="PutIntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putIntegerVal"></a>

```csharp
private void PutIntegerVal(DataDatabricksWorkspaceSettingV2IntegerVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putIntegerVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal">DataDatabricksWorkspaceSettingV2IntegerVal</a>

---

##### `PutPersonalCompute` <a name="PutPersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putPersonalCompute"></a>

```csharp
private void PutPersonalCompute(DataDatabricksWorkspaceSettingV2PersonalCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putPersonalCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute">DataDatabricksWorkspaceSettingV2PersonalCompute</a>

---

##### `PutRestrictWorkspaceAdmins` <a name="PutRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putRestrictWorkspaceAdmins"></a>

```csharp
private void PutRestrictWorkspaceAdmins(DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins</a>

---

##### `PutStringVal` <a name="PutStringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putStringVal"></a>

```csharp
private void PutStringVal(DataDatabricksWorkspaceSettingV2StringVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal">DataDatabricksWorkspaceSettingV2StringVal</a>

---

##### `ResetAibiDashboardEmbeddingAccessPolicy` <a name="ResetAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void ResetAibiDashboardEmbeddingAccessPolicy()
```

##### `ResetAibiDashboardEmbeddingApprovedDomains` <a name="ResetAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void ResetAibiDashboardEmbeddingApprovedDomains()
```

##### `ResetAutomaticClusterUpdateWorkspace` <a name="ResetAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetAutomaticClusterUpdateWorkspace"></a>

```csharp
private void ResetAutomaticClusterUpdateWorkspace()
```

##### `ResetBooleanVal` <a name="ResetBooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetBooleanVal"></a>

```csharp
private void ResetBooleanVal()
```

##### `ResetDefaultDataSecurityMode` <a name="ResetDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetDefaultDataSecurityMode"></a>

```csharp
private void ResetDefaultDataSecurityMode()
```

##### `ResetEffectiveAibiDashboardEmbeddingAccessPolicy` <a name="ResetEffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
private void ResetEffectiveAibiDashboardEmbeddingAccessPolicy()
```

##### `ResetEffectiveAibiDashboardEmbeddingApprovedDomains` <a name="ResetEffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
private void ResetEffectiveAibiDashboardEmbeddingApprovedDomains()
```

##### `ResetEffectiveAutomaticClusterUpdateWorkspace` <a name="ResetEffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
private void ResetEffectiveAutomaticClusterUpdateWorkspace()
```

##### `ResetEffectiveDefaultDataSecurityMode` <a name="ResetEffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveDefaultDataSecurityMode"></a>

```csharp
private void ResetEffectiveDefaultDataSecurityMode()
```

##### `ResetEffectivePersonalCompute` <a name="ResetEffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectivePersonalCompute"></a>

```csharp
private void ResetEffectivePersonalCompute()
```

##### `ResetEffectiveRestrictWorkspaceAdmins` <a name="ResetEffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetEffectiveRestrictWorkspaceAdmins"></a>

```csharp
private void ResetEffectiveRestrictWorkspaceAdmins()
```

##### `ResetIntegerVal` <a name="ResetIntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetIntegerVal"></a>

```csharp
private void ResetIntegerVal()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPersonalCompute` <a name="ResetPersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetPersonalCompute"></a>

```csharp
private void ResetPersonalCompute()
```

##### `ResetRestrictWorkspaceAdmins` <a name="ResetRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetRestrictWorkspaceAdmins"></a>

```csharp
private void ResetRestrictWorkspaceAdmins()
```

##### `ResetStringVal` <a name="ResetStringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetStringVal"></a>

```csharp
private void ResetStringVal()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksWorkspaceSettingV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceSettingV2.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceSettingV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceSettingV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksWorkspaceSettingV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksWorkspaceSettingV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceSettingV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceSettingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceSettingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference">DataDatabricksWorkspaceSettingV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.defaultDataSecurityMode">DefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference">DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy">EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains">EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace">EffectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveBooleanVal">EffectiveBooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveDefaultDataSecurityMode">EffectiveDefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference">DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveIntegerVal">EffectiveIntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectivePersonalCompute">EffectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference">DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins">EffectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveStringVal">EffectiveStringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.integerVal">IntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference">DataDatabricksWorkspaceSettingV2IntegerValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.personalCompute">PersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference">DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.stringVal">StringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference">DataDatabricksWorkspaceSettingV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput">AibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput">AibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput">AutomaticClusterUpdateWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.booleanValInput">BooleanValInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.defaultDataSecurityModeInput">DefaultDataSecurityModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput">EffectiveAibiDashboardEmbeddingAccessPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput">EffectiveAibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput">EffectiveAutomaticClusterUpdateWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveDefaultDataSecurityModeInput">EffectiveDefaultDataSecurityModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectivePersonalComputeInput">EffectivePersonalComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput">EffectiveRestrictWorkspaceAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.integerValInput">IntegerValInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.personalComputeInput">PersonalComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.restrictWorkspaceAdminsInput">RestrictWorkspaceAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.stringValInput">StringValInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference AibiDashboardEmbeddingAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference AibiDashboardEmbeddingApprovedDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.automaticClusterUpdateWorkspace"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference AutomaticClusterUpdateWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `BooleanVal`<sup>Required</sup> <a name="BooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.booleanVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2BooleanValOutputReference BooleanVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference">DataDatabricksWorkspaceSettingV2BooleanValOutputReference</a>

---

##### `DefaultDataSecurityMode`<sup>Required</sup> <a name="DefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.defaultDataSecurityMode"></a>

```csharp
public DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference DefaultDataSecurityMode { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference">DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference</a>

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicy`<sup>Required</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference EffectiveAibiDashboardEmbeddingAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference</a>

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference EffectiveAibiDashboardEmbeddingApprovedDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `EffectiveAutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference EffectiveAutomaticClusterUpdateWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `EffectiveBooleanVal`<sup>Required</sup> <a name="EffectiveBooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveBooleanVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference EffectiveBooleanVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference</a>

---

##### `EffectiveDefaultDataSecurityMode`<sup>Required</sup> <a name="EffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveDefaultDataSecurityMode"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference EffectiveDefaultDataSecurityMode { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference">DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference</a>

---

##### `EffectiveIntegerVal`<sup>Required</sup> <a name="EffectiveIntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveIntegerVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference EffectiveIntegerVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference</a>

---

##### `EffectivePersonalCompute`<sup>Required</sup> <a name="EffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectivePersonalCompute"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference EffectivePersonalCompute { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference">DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference</a>

---

##### `EffectiveRestrictWorkspaceAdmins`<sup>Required</sup> <a name="EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveRestrictWorkspaceAdmins"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference EffectiveRestrictWorkspaceAdmins { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference</a>

---

##### `EffectiveStringVal`<sup>Required</sup> <a name="EffectiveStringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveStringVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference EffectiveStringVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference">DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference</a>

---

##### `IntegerVal`<sup>Required</sup> <a name="IntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.integerVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2IntegerValOutputReference IntegerVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference">DataDatabricksWorkspaceSettingV2IntegerValOutputReference</a>

---

##### `PersonalCompute`<sup>Required</sup> <a name="PersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.personalCompute"></a>

```csharp
public DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference PersonalCompute { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference">DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference</a>

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.restrictWorkspaceAdmins"></a>

```csharp
public DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference RestrictWorkspaceAdmins { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference">DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference</a>

---

##### `StringVal`<sup>Required</sup> <a name="StringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.stringVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2StringValOutputReference StringVal { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference">DataDatabricksWorkspaceSettingV2StringValOutputReference</a>

---

##### `AibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingAccessPolicyInput"></a>

```csharp
public object AibiDashboardEmbeddingAccessPolicyInput { get; }
```

- *Type:* object

---

##### `AibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```csharp
public object AibiDashboardEmbeddingApprovedDomainsInput { get; }
```

- *Type:* object

---

##### `AutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.automaticClusterUpdateWorkspaceInput"></a>

```csharp
public object AutomaticClusterUpdateWorkspaceInput { get; }
```

- *Type:* object

---

##### `BooleanValInput`<sup>Optional</sup> <a name="BooleanValInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.booleanValInput"></a>

```csharp
public object BooleanValInput { get; }
```

- *Type:* object

---

##### `DefaultDataSecurityModeInput`<sup>Optional</sup> <a name="DefaultDataSecurityModeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.defaultDataSecurityModeInput"></a>

```csharp
public object DefaultDataSecurityModeInput { get; }
```

- *Type:* object

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicyInput`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingAccessPolicyInput"></a>

```csharp
public object EffectiveAibiDashboardEmbeddingAccessPolicyInput { get; }
```

- *Type:* object

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAibiDashboardEmbeddingApprovedDomainsInput"></a>

```csharp
public object EffectiveAibiDashboardEmbeddingApprovedDomainsInput { get; }
```

- *Type:* object

---

##### `EffectiveAutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="EffectiveAutomaticClusterUpdateWorkspaceInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveAutomaticClusterUpdateWorkspaceInput"></a>

```csharp
public object EffectiveAutomaticClusterUpdateWorkspaceInput { get; }
```

- *Type:* object

---

##### `EffectiveDefaultDataSecurityModeInput`<sup>Optional</sup> <a name="EffectiveDefaultDataSecurityModeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveDefaultDataSecurityModeInput"></a>

```csharp
public object EffectiveDefaultDataSecurityModeInput { get; }
```

- *Type:* object

---

##### `EffectivePersonalComputeInput`<sup>Optional</sup> <a name="EffectivePersonalComputeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectivePersonalComputeInput"></a>

```csharp
public object EffectivePersonalComputeInput { get; }
```

- *Type:* object

---

##### `EffectiveRestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="EffectiveRestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.effectiveRestrictWorkspaceAdminsInput"></a>

```csharp
public object EffectiveRestrictWorkspaceAdminsInput { get; }
```

- *Type:* object

---

##### `IntegerValInput`<sup>Optional</sup> <a name="IntegerValInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.integerValInput"></a>

```csharp
public object IntegerValInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PersonalComputeInput`<sup>Optional</sup> <a name="PersonalComputeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.personalComputeInput"></a>

```csharp
public object PersonalComputeInput { get; }
```

- *Type:* object

---

##### `RestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="RestrictWorkspaceAdminsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.restrictWorkspaceAdminsInput"></a>

```csharp
public object RestrictWorkspaceAdminsInput { get; }
```

- *Type:* object

---

##### `StringValInput`<sup>Optional</sup> <a name="StringValInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.stringValInput"></a>

```csharp
public object StringValInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy <a name="DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy {
    string AccessPolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}. |

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}.

---

### DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains <a name="DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains {
    string[] ApprovedDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}. |

---

##### `ApprovedDomains`<sup>Optional</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}.

---

### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace {
    object CanToggle = null,
    object Enabled = null,
    DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails = null,
    DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow = null,
    object RestartEvenIfNoUpdatesAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.canToggle"></a>

```csharp
public object CanToggle { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}.

---

##### `EnablementDetails`<sup>Optional</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}.

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails {
    object ForcedForComplianceMode = null,
    object UnavailableForDisabledEntitlement = null,
    object UnavailableForNonEnterpriseTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `ForcedForComplianceMode`<sup>Optional</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```csharp
public object ForcedForComplianceMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `UnavailableForDisabledEntitlement`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```csharp
public object UnavailableForDisabledEntitlement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `UnavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```csharp
public object UnavailableForNonEnterpriseTier { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow {
    DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}.

---

### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
    string DayOfWeek = null,
    string Frequency = null,
    DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}.

---

### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}.

---

### DataDatabricksWorkspaceSettingV2BooleanVal <a name="DataDatabricksWorkspaceSettingV2BooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2BooleanVal {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2Config <a name="DataDatabricksWorkspaceSettingV2Config" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicy = null,
    DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains = null,
    DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace = null,
    DataDatabricksWorkspaceSettingV2BooleanVal BooleanVal = null,
    DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode DefaultDataSecurityMode = null,
    DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy EffectiveAibiDashboardEmbeddingAccessPolicy = null,
    DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains EffectiveAibiDashboardEmbeddingApprovedDomains = null,
    DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace EffectiveAutomaticClusterUpdateWorkspace = null,
    DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode EffectiveDefaultDataSecurityMode = null,
    DataDatabricksWorkspaceSettingV2EffectivePersonalCompute EffectivePersonalCompute = null,
    DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins EffectiveRestrictWorkspaceAdmins = null,
    DataDatabricksWorkspaceSettingV2IntegerVal IntegerVal = null,
    string Name = null,
    DataDatabricksWorkspaceSettingV2PersonalCompute PersonalCompute = null,
    DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins RestrictWorkspaceAdmins = null,
    DataDatabricksWorkspaceSettingV2StringVal StringVal = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy">AibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksWorkspaceSettingV2#aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksWorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#automatic_cluster_update_workspace DataDatabricksWorkspaceSettingV2#automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal">DataDatabricksWorkspaceSettingV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#boolean_val DataDatabricksWorkspaceSettingV2#boolean_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.defaultDataSecurityMode">DefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#default_data_security_mode DataDatabricksWorkspaceSettingV2#default_data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy">EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksWorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains">EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksWorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace">EffectiveAutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksWorkspaceSettingV2#effective_automatic_cluster_update_workspace}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveDefaultDataSecurityMode">EffectiveDefaultDataSecurityMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_default_data_security_mode DataDatabricksWorkspaceSettingV2#effective_default_data_security_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectivePersonalCompute">EffectivePersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute">DataDatabricksWorkspaceSettingV2EffectivePersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_personal_compute DataDatabricksWorkspaceSettingV2#effective_personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins">EffectiveRestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_restrict_workspace_admins DataDatabricksWorkspaceSettingV2#effective_restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.integerVal">IntegerVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal">DataDatabricksWorkspaceSettingV2IntegerVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#integer_val DataDatabricksWorkspaceSettingV2#integer_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#name DataDatabricksWorkspaceSettingV2#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.personalCompute">PersonalCompute</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute">DataDatabricksWorkspaceSettingV2PersonalCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#personal_compute DataDatabricksWorkspaceSettingV2#personal_compute}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restrict_workspace_admins DataDatabricksWorkspaceSettingV2#restrict_workspace_admins}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.stringVal">StringVal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal">DataDatabricksWorkspaceSettingV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#string_val DataDatabricksWorkspaceSettingV2#string_val}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#workspace_id DataDatabricksWorkspaceSettingV2#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="AibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.aibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy AibiDashboardEmbeddingAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#aibi_dashboard_embedding_access_policy DataDatabricksWorkspaceSettingV2#aibi_dashboard_embedding_access_policy}.

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.aibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#aibi_dashboard_embedding_approved_domains DataDatabricksWorkspaceSettingV2#aibi_dashboard_embedding_approved_domains}.

---

##### `AutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.automaticClusterUpdateWorkspace"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#automatic_cluster_update_workspace DataDatabricksWorkspaceSettingV2#automatic_cluster_update_workspace}.

---

##### `BooleanVal`<sup>Optional</sup> <a name="BooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.booleanVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2BooleanVal BooleanVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanVal">DataDatabricksWorkspaceSettingV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#boolean_val DataDatabricksWorkspaceSettingV2#boolean_val}.

---

##### `DefaultDataSecurityMode`<sup>Optional</sup> <a name="DefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.defaultDataSecurityMode"></a>

```csharp
public DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode DefaultDataSecurityMode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#default_data_security_mode DataDatabricksWorkspaceSettingV2#default_data_security_mode}.

---

##### `EffectiveAibiDashboardEmbeddingAccessPolicy`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingAccessPolicy"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy EffectiveAibiDashboardEmbeddingAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_aibi_dashboard_embedding_access_policy DataDatabricksWorkspaceSettingV2#effective_aibi_dashboard_embedding_access_policy}.

---

##### `EffectiveAibiDashboardEmbeddingApprovedDomains`<sup>Optional</sup> <a name="EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAibiDashboardEmbeddingApprovedDomains"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains EffectiveAibiDashboardEmbeddingApprovedDomains { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains">DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_aibi_dashboard_embedding_approved_domains DataDatabricksWorkspaceSettingV2#effective_aibi_dashboard_embedding_approved_domains}.

---

##### `EffectiveAutomaticClusterUpdateWorkspace`<sup>Optional</sup> <a name="EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveAutomaticClusterUpdateWorkspace"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace EffectiveAutomaticClusterUpdateWorkspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_automatic_cluster_update_workspace DataDatabricksWorkspaceSettingV2#effective_automatic_cluster_update_workspace}.

---

##### `EffectiveDefaultDataSecurityMode`<sup>Optional</sup> <a name="EffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveDefaultDataSecurityMode"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode EffectiveDefaultDataSecurityMode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode">DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_default_data_security_mode DataDatabricksWorkspaceSettingV2#effective_default_data_security_mode}.

---

##### `EffectivePersonalCompute`<sup>Optional</sup> <a name="EffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectivePersonalCompute"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectivePersonalCompute EffectivePersonalCompute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute">DataDatabricksWorkspaceSettingV2EffectivePersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_personal_compute DataDatabricksWorkspaceSettingV2#effective_personal_compute}.

---

##### `EffectiveRestrictWorkspaceAdmins`<sup>Optional</sup> <a name="EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.effectiveRestrictWorkspaceAdmins"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins EffectiveRestrictWorkspaceAdmins { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#effective_restrict_workspace_admins DataDatabricksWorkspaceSettingV2#effective_restrict_workspace_admins}.

---

##### `IntegerVal`<sup>Optional</sup> <a name="IntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.integerVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2IntegerVal IntegerVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal">DataDatabricksWorkspaceSettingV2IntegerVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#integer_val DataDatabricksWorkspaceSettingV2#integer_val}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#name DataDatabricksWorkspaceSettingV2#name}.

---

##### `PersonalCompute`<sup>Optional</sup> <a name="PersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.personalCompute"></a>

```csharp
public DataDatabricksWorkspaceSettingV2PersonalCompute PersonalCompute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute">DataDatabricksWorkspaceSettingV2PersonalCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#personal_compute DataDatabricksWorkspaceSettingV2#personal_compute}.

---

##### `RestrictWorkspaceAdmins`<sup>Optional</sup> <a name="RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.restrictWorkspaceAdmins"></a>

```csharp
public DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins RestrictWorkspaceAdmins { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins">DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restrict_workspace_admins DataDatabricksWorkspaceSettingV2#restrict_workspace_admins}.

---

##### `StringVal`<sup>Optional</sup> <a name="StringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.stringVal"></a>

```csharp
public DataDatabricksWorkspaceSettingV2StringVal StringVal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal">DataDatabricksWorkspaceSettingV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#string_val DataDatabricksWorkspaceSettingV2#string_val}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2Config.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#workspace_id DataDatabricksWorkspaceSettingV2#workspace_id}.

---

### DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode <a name="DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityMode.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy <a name="DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy {
    string AccessPolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}. |

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicy.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#access_policy_type DataDatabricksWorkspaceSettingV2#access_policy_type}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains <a name="DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains {
    string[] ApprovedDomains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}. |

---

##### `ApprovedDomains`<sup>Optional</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#approved_domains DataDatabricksWorkspaceSettingV2#approved_domains}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace {
    object CanToggle = null,
    object Enabled = null,
    DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails = null,
    DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow = null,
    object RestartEvenIfNoUpdatesAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}. |

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```csharp
public object CanToggle { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#can_toggle DataDatabricksWorkspaceSettingV2#can_toggle}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enabled DataDatabricksWorkspaceSettingV2#enabled}.

---

##### `EnablementDetails`<sup>Optional</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.enablementDetails"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails EnablementDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#enablement_details DataDatabricksWorkspaceSettingV2#enablement_details}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#maintenance_window DataDatabricksWorkspaceSettingV2#maintenance_window}.

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#restart_even_if_no_updates_available DataDatabricksWorkspaceSettingV2#restart_even_if_no_updates_available}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails {
    object ForcedForComplianceMode = null,
    object UnavailableForDisabledEntitlement = null,
    object UnavailableForNonEnterpriseTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}. |

---

##### `ForcedForComplianceMode`<sup>Optional</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.forcedForComplianceMode"></a>

```csharp
public object ForcedForComplianceMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#forced_for_compliance_mode DataDatabricksWorkspaceSettingV2#forced_for_compliance_mode}.

---

##### `UnavailableForDisabledEntitlement`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForDisabledEntitlement"></a>

```csharp
public object UnavailableForDisabledEntitlement { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_disabled_entitlement DataDatabricksWorkspaceSettingV2#unavailable_for_disabled_entitlement}.

---

##### `UnavailableForNonEnterpriseTier`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails.property.unavailableForNonEnterpriseTier"></a>

```csharp
public object UnavailableForNonEnterpriseTier { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#unavailable_for_non_enterprise_tier DataDatabricksWorkspaceSettingV2#unavailable_for_non_enterprise_tier}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow {
    DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#week_day_based_schedule DataDatabricksWorkspaceSettingV2#week_day_based_schedule}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
    string DayOfWeek = null,
    string Frequency = null,
    DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}. |

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#day_of_week DataDatabricksWorkspaceSettingV2#day_of_week}.

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#frequency DataDatabricksWorkspaceSettingV2#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#window_start_time DataDatabricksWorkspaceSettingV2#window_start_time}.

---

### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#hours DataDatabricksWorkspaceSettingV2#hours}.

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#minutes DataDatabricksWorkspaceSettingV2#minutes}.

---

### DataDatabricksWorkspaceSettingV2EffectiveBooleanVal <a name="DataDatabricksWorkspaceSettingV2EffectiveBooleanVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveBooleanVal {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode <a name="DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityMode.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}.

---

### DataDatabricksWorkspaceSettingV2EffectiveIntegerVal <a name="DataDatabricksWorkspaceSettingV2EffectiveIntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveIntegerVal {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2EffectivePersonalCompute <a name="DataDatabricksWorkspaceSettingV2EffectivePersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectivePersonalCompute {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalCompute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins <a name="DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdmins.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}.

---

### DataDatabricksWorkspaceSettingV2EffectiveStringVal <a name="DataDatabricksWorkspaceSettingV2EffectiveStringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveStringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2IntegerVal <a name="DataDatabricksWorkspaceSettingV2IntegerVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2IntegerVal {
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerVal.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2PersonalCompute <a name="DataDatabricksWorkspaceSettingV2PersonalCompute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2PersonalCompute {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalCompute.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

### DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins <a name="DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdmins.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#status DataDatabricksWorkspaceSettingV2#status}.

---

### DataDatabricksWorkspaceSettingV2StringVal <a name="DataDatabricksWorkspaceSettingV2StringVal" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2StringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/workspace_setting_v2#value DataDatabricksWorkspaceSettingV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference <a name="DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">AccessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPolicyTypeInput`<sup>Optional</sup> <a name="AccessPolicyTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```csharp
public string AccessPolicyTypeInput { get; }
```

- *Type:* string

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference <a name="DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">ResetApprovedDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedDomains` <a name="ResetApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```csharp
private void ResetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```csharp
public string[] ApprovedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">ResetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">ResetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">ResetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForcedForComplianceMode` <a name="ResetForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```csharp
private void ResetForcedForComplianceMode()
```

##### `ResetUnavailableForDisabledEntitlement` <a name="ResetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```csharp
private void ResetUnavailableForDisabledEntitlement()
```

##### `ResetUnavailableForNonEnterpriseTier` <a name="ResetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```csharp
private void ResetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">ForcedForComplianceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">UnavailableForDisabledEntitlementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">UnavailableForNonEnterpriseTierInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForcedForComplianceModeInput`<sup>Optional</sup> <a name="ForcedForComplianceModeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```csharp
public object ForcedForComplianceModeInput { get; }
```

- *Type:* object

---

##### `UnavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```csharp
public object UnavailableForDisabledEntitlementInput { get; }
```

- *Type:* object

---

##### `UnavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```csharp
public object UnavailableForNonEnterpriseTierInput { get; }
```

- *Type:* object

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```csharp
public object ForcedForComplianceMode { get; }
```

- *Type:* object

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```csharp
public object UnavailableForDisabledEntitlement { get; }
```

- *Type:* object

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```csharp
public object UnavailableForNonEnterpriseTier { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```csharp
private void PutWeekDayBasedSchedule(DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```csharp
private void ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference WeekDayBasedSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```csharp
public object WeekDayBasedScheduleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```csharp
public object WindowStartTimeInput { get; }
```

- *Type:* object

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference <a name="DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">PutEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">ResetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnablementDetails` <a name="PutEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```csharp
private void PutEnablementDetails(DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```csharp
private void ResetCanToggle()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnablementDetails` <a name="ResetEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```csharp
private void ResetEnablementDetails()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```csharp
private void ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">EnablementDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference EnablementDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```csharp
public DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```csharp
public object CanToggleInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnablementDetailsInput`<sup>Optional</sup> <a name="EnablementDetailsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```csharp
public object EnablementDetailsInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```csharp
public object MaintenanceWindowInput { get; }
```

- *Type:* object

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailableInput { get; }
```

- *Type:* object

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```csharp
public object CanToggle { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2AutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2BooleanValOutputReference <a name="DataDatabricksWorkspaceSettingV2BooleanValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2BooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2BooleanValOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference <a name="DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2DefaultDataSecurityModeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput">AccessPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType">AccessPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPolicyTypeInput`<sup>Optional</sup> <a name="AccessPolicyTypeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyTypeInput"></a>

```csharp
public string AccessPolicyTypeInput { get; }
```

- *Type:* string

---

##### `AccessPolicyType`<sup>Required</sup> <a name="AccessPolicyType" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.accessPolicyType"></a>

```csharp
public string AccessPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains">ResetApprovedDomains</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedDomains` <a name="ResetApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.resetApprovedDomains"></a>

```csharp
private void ResetApprovedDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```csharp
public string[] ApprovedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```csharp
public string[] ApprovedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode">ResetForcedForComplianceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement">ResetUnavailableForDisabledEntitlement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier">ResetUnavailableForNonEnterpriseTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForcedForComplianceMode` <a name="ResetForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetForcedForComplianceMode"></a>

```csharp
private void ResetForcedForComplianceMode()
```

##### `ResetUnavailableForDisabledEntitlement` <a name="ResetUnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForDisabledEntitlement"></a>

```csharp
private void ResetUnavailableForDisabledEntitlement()
```

##### `ResetUnavailableForNonEnterpriseTier` <a name="ResetUnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resetUnavailableForNonEnterpriseTier"></a>

```csharp
private void ResetUnavailableForNonEnterpriseTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput">ForcedForComplianceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput">UnavailableForDisabledEntitlementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput">UnavailableForNonEnterpriseTierInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForcedForComplianceModeInput`<sup>Optional</sup> <a name="ForcedForComplianceModeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceModeInput"></a>

```csharp
public object ForcedForComplianceModeInput { get; }
```

- *Type:* object

---

##### `UnavailableForDisabledEntitlementInput`<sup>Optional</sup> <a name="UnavailableForDisabledEntitlementInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlementInput"></a>

```csharp
public object UnavailableForDisabledEntitlementInput { get; }
```

- *Type:* object

---

##### `UnavailableForNonEnterpriseTierInput`<sup>Optional</sup> <a name="UnavailableForNonEnterpriseTierInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTierInput"></a>

```csharp
public object UnavailableForNonEnterpriseTierInput { get; }
```

- *Type:* object

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```csharp
public object ForcedForComplianceMode { get; }
```

- *Type:* object

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```csharp
public object UnavailableForDisabledEntitlement { get; }
```

- *Type:* object

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```csharp
public object UnavailableForNonEnterpriseTier { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```csharp
private void PutWeekDayBasedSchedule(DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```csharp
private void ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference WeekDayBasedSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```csharp
public object WeekDayBasedScheduleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetFrequency"></a>

```csharp
private void ResetFrequency()
```

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```csharp
public object WindowStartTimeInput { get; }
```

- *Type:* object

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails">PutEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails">ResetEnablementDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnablementDetails` <a name="PutEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails"></a>

```csharp
private void PutEnablementDetails(DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putEnablementDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```csharp
private void ResetCanToggle()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnablementDetails` <a name="ResetEnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetEnablementDetails"></a>

```csharp
private void ResetEnablementDetails()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```csharp
private void ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput">EnablementDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference EnablementDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```csharp
public object CanToggleInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnablementDetailsInput`<sup>Optional</sup> <a name="EnablementDetailsInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetailsInput"></a>

```csharp
public object EnablementDetailsInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```csharp
public object MaintenanceWindowInput { get; }
```

- *Type:* object

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailableInput { get; }
```

- *Type:* object

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```csharp
public object CanToggle { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public object RestartEvenIfNoUpdatesAvailable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.value">Value</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal">DataDatabricksWorkspaceSettingV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.value"></a>

```csharp
public object Value { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveBooleanVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveBooleanVal">DataDatabricksWorkspaceSettingV2EffectiveBooleanVal</a>

---


### DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveDefaultDataSecurityModeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal">DataDatabricksWorkspaceSettingV2EffectiveIntegerVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerValOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveIntegerVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveIntegerVal">DataDatabricksWorkspaceSettingV2EffectiveIntegerVal</a>

---


### DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectivePersonalComputeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference <a name="DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal">DataDatabricksWorkspaceSettingV2EffectiveStringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringValOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksWorkspaceSettingV2EffectiveStringVal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2EffectiveStringVal">DataDatabricksWorkspaceSettingV2EffectiveStringVal</a>

---


### DataDatabricksWorkspaceSettingV2IntegerValOutputReference <a name="DataDatabricksWorkspaceSettingV2IntegerValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2IntegerValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2IntegerValOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference <a name="DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2PersonalComputeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference <a name="DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2RestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksWorkspaceSettingV2StringValOutputReference <a name="DataDatabricksWorkspaceSettingV2StringValOutputReference" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksWorkspaceSettingV2StringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksWorkspaceSettingV2.DataDatabricksWorkspaceSettingV2StringValOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



