# `dataDatabricksRfaAccessRequestDestinations` Submodule <a name="`dataDatabricksRfaAccessRequestDestinations` Submodule" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRfaAccessRequestDestinations <a name="DataDatabricksRfaAccessRequestDestinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations databricks_rfa_access_request_destinations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinations(Construct Scope, string Id, DataDatabricksRfaAccessRequestDestinationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig">DataDatabricksRfaAccessRequestDestinationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig">DataDatabricksRfaAccessRequestDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putSecurable">PutSecurable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putDestinations.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]

---

##### `PutSecurable` <a name="PutSecurable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putSecurable"></a>

```csharp
private void PutSecurable(DataDatabricksRfaAccessRequestDestinationsSecurable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.putSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRfaAccessRequestDestinations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRfaAccessRequestDestinations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRfaAccessRequestDestinations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRfaAccessRequestDestinations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksRfaAccessRequestDestinations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksRfaAccessRequestDestinations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksRfaAccessRequestDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRfaAccessRequestDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden">AreAnyDestinationsHidden</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable">Securable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinationsInput">DestinationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableInput">SecurableInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AreAnyDestinationsHidden`<sup>Required</sup> <a name="AreAnyDestinationsHidden" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.areAnyDestinationsHidden"></a>

```csharp
public IResolvable AreAnyDestinationsHidden { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinations"></a>

```csharp
public DataDatabricksRfaAccessRequestDestinationsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList">DataDatabricksRfaAccessRequestDestinationsDestinationsList</a>

---

##### `Securable`<sup>Required</sup> <a name="Securable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securable"></a>

```csharp
public DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference Securable { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference">DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.destinationsInput"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations[] DestinationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]

---

##### `SecurableInput`<sup>Optional</sup> <a name="SecurableInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.securableInput"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsSecurable SecurableInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRfaAccessRequestDestinationsConfig <a name="DataDatabricksRfaAccessRequestDestinationsConfig" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations[] Destinations,
    DataDatabricksRfaAccessRequestDestinationsSecurable Securable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.destinations">Destinations</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destinations DataDatabricksRfaAccessRequestDestinations#destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.securable">Securable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#securable DataDatabricksRfaAccessRequestDestinations#securable}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.destinations"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations[] Destinations { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destinations DataDatabricksRfaAccessRequestDestinations#destinations}.

---

##### `Securable`<sup>Required</sup> <a name="Securable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsConfig.property.securable"></a>

```csharp
public DataDatabricksRfaAccessRequestDestinationsSecurable Securable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#securable DataDatabricksRfaAccessRequestDestinations#securable}.

---

### DataDatabricksRfaAccessRequestDestinationsDestinations <a name="DataDatabricksRfaAccessRequestDestinationsDestinations" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsDestinations {
    string DestinationId = null,
    string DestinationType = null,
    string SpecialDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId">DestinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination">SpecialDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationId"></a>

```csharp
public string DestinationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destination_id DataDatabricksRfaAccessRequestDestinations#destination_id}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#destination_type DataDatabricksRfaAccessRequestDestinations#destination_type}.

---

##### `SpecialDestination`<sup>Optional</sup> <a name="SpecialDestination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations.property.specialDestination"></a>

```csharp
public string SpecialDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#special_destination DataDatabricksRfaAccessRequestDestinations#special_destination}.

---

### DataDatabricksRfaAccessRequestDestinationsSecurable <a name="DataDatabricksRfaAccessRequestDestinationsSecurable" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsSecurable {
    string FullName = null,
    string ProviderShare = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare">ProviderShare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}. |

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#full_name DataDatabricksRfaAccessRequestDestinations#full_name}.

---

##### `ProviderShare`<sup>Optional</sup> <a name="ProviderShare" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.providerShare"></a>

```csharp
public string ProviderShare { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#provider_share DataDatabricksRfaAccessRequestDestinations#provider_share}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/rfa_access_request_destinations#type DataDatabricksRfaAccessRequestDestinations#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRfaAccessRequestDestinationsDestinationsList <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsList" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get"></a>

```csharp
private DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>[]

---


### DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination">ResetSpecialDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationId"></a>

```csharp
private void ResetDestinationId()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetSpecialDestination` <a name="ResetSpecialDestination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.resetSpecialDestination"></a>

```csharp
private void ResetSpecialDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput">SpecialDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId">DestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination">SpecialDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationIdInput"></a>

```csharp
public string DestinationIdInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `SpecialDestinationInput`<sup>Optional</sup> <a name="SpecialDestinationInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestinationInput"></a>

```csharp
public string SpecialDestinationInput { get; }
```

- *Type:* string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationId"></a>

```csharp
public string DestinationId { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `SpecialDestination`<sup>Required</sup> <a name="SpecialDestination" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.specialDestination"></a>

```csharp
public string SpecialDestination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsDestinations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsDestinations">DataDatabricksRfaAccessRequestDestinationsDestinations</a>

---


### DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference <a name="DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare">ResetProviderShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetProviderShare` <a name="ResetProviderShare" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetProviderShare"></a>

```csharp
private void ResetProviderShare()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput">ProviderShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare">ProviderShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `ProviderShareInput`<sup>Optional</sup> <a name="ProviderShareInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShareInput"></a>

```csharp
public string ProviderShareInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `ProviderShare`<sup>Required</sup> <a name="ProviderShare" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.providerShare"></a>

```csharp
public string ProviderShare { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRfaAccessRequestDestinationsSecurable InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRfaAccessRequestDestinations.DataDatabricksRfaAccessRequestDestinationsSecurable">DataDatabricksRfaAccessRequestDestinationsSecurable</a>

---



