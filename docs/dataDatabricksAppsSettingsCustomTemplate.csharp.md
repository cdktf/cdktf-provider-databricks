# `dataDatabricksAppsSettingsCustomTemplate` Submodule <a name="`dataDatabricksAppsSettingsCustomTemplate` Submodule" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSettingsCustomTemplate <a name="DataDatabricksAppsSettingsCustomTemplate" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplate(Construct Scope, string Id, DataDatabricksAppsSettingsCustomTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putManifest"></a>

```csharp
private void PutManifest(DataDatabricksAppsSettingsCustomTemplateManifest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAppsSettingsCustomTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProviderInput">GitProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepoInput">GitRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifestInput">ManifestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider">GitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo">GitRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestOutputReference Manifest { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GitProviderInput`<sup>Optional</sup> <a name="GitProviderInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProviderInput"></a>

```csharp
public string GitProviderInput { get; }
```

- *Type:* string

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepoInput"></a>

```csharp
public string GitRepoInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifestInput"></a>

```csharp
public object ManifestInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider"></a>

```csharp
public string GitProvider { get; }
```

- *Type:* string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo"></a>

```csharp
public string GitRepo { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSettingsCustomTemplateConfig <a name="DataDatabricksAppsSettingsCustomTemplateConfig" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GitProvider,
    string GitRepo,
    DataDatabricksAppsSettingsCustomTemplateManifest Manifest,
    string Name,
    string Path,
    string Description = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.gitProvider">GitProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#git_provider DataDatabricksAppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.gitRepo">GitRepo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#git_repo DataDatabricksAppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#manifest DataDatabricksAppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#path DataDatabricksAppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.gitProvider"></a>

```csharp
public string GitProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#git_provider DataDatabricksAppsSettingsCustomTemplate#git_provider}.

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.gitRepo"></a>

```csharp
public string GitRepo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#git_repo DataDatabricksAppsSettingsCustomTemplate#git_repo}.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.manifest"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifest Manifest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#manifest DataDatabricksAppsSettingsCustomTemplate#manifest}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#path DataDatabricksAppsSettingsCustomTemplate#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}.

---

### DataDatabricksAppsSettingsCustomTemplateManifest <a name="DataDatabricksAppsSettingsCustomTemplateManifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifest {
    string Name,
    double Version,
    string Description = null,
    object ResourceSpecs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```csharp
public object ResourceSpecs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs {
    string Name,
    string Description = null,
    DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec JobSpec = null,
    DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec SecretSpec = null,
    DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec ServingEndpointSpec = null,
    DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec = null,
    DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec UcSecurableSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec SecretSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec ServingEndpointSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec SqlWarehouseSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec UcSecurableSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
    string Permission,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSettingsCustomTemplateManifestOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```csharp
private void PutResourceSpecs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```csharp
private void ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList ResourceSpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```csharp
public object ResourceSpecsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```csharp
private DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```csharp
private void PutJobSpec(DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```csharp
private void PutSecretSpec(DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```csharp
private void PutServingEndpointSpec(DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```csharp
private void PutSqlWarehouseSpec(DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```csharp
private void PutUcSecurableSpec(DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```csharp
private void ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```csharp
private void ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```csharp
private void ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```csharp
private void ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```csharp
private void ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference SecretSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference ServingEndpointSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference SqlWarehouseSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```csharp
public DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference UcSecurableSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```csharp
public object JobSpecInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```csharp
public object SecretSpecInput { get; }
```

- *Type:* object

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```csharp
public object ServingEndpointSpecInput { get; }
```

- *Type:* object

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```csharp
public object SqlWarehouseSpecInput { get; }
```

- *Type:* object

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```csharp
public object UcSecurableSpecInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



