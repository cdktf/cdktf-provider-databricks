# `dataDatabricksCleanRoomAutoApprovalRules` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRules` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRules <a name="DataDatabricksCleanRoomAutoApprovalRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules databricks_clean_room_auto_approval_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAutoApprovalRules(Construct Scope, string Id, DataDatabricksCleanRoomAutoApprovalRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig">DataDatabricksCleanRoomAutoApprovalRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig">DataDatabricksCleanRoomAutoApprovalRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAutoApprovalRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAutoApprovalRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAutoApprovalRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAutoApprovalRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomAutoApprovalRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.rules"></a>

```csharp
public DataDatabricksCleanRoomAutoApprovalRulesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList">DataDatabricksCleanRoomAutoApprovalRulesRulesList</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRulesConfig <a name="DataDatabricksCleanRoomAutoApprovalRulesConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAutoApprovalRulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#workspace_id DataDatabricksCleanRoomAutoApprovalRules#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#workspace_id DataDatabricksCleanRoomAutoApprovalRules#workspace_id}.

---

### DataDatabricksCleanRoomAutoApprovalRulesRules <a name="DataDatabricksCleanRoomAutoApprovalRulesRules" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAutoApprovalRulesRules {
    string AuthorCollaboratorAlias = null,
    string AuthorScope = null,
    string CleanRoomName = null,
    string RunnerCollaboratorAlias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope">AuthorScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}. |

---

##### `AuthorCollaboratorAlias`<sup>Optional</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorCollaboratorAlias"></a>

```csharp
public string AuthorCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#author_collaborator_alias}.

---

##### `AuthorScope`<sup>Optional</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.authorScope"></a>

```csharp
public string AuthorScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#author_scope DataDatabricksCleanRoomAutoApprovalRules#author_scope}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#clean_room_name DataDatabricksCleanRoomAutoApprovalRules#clean_room_name}.

---

##### `RunnerCollaboratorAlias`<sup>Optional</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules.property.runnerCollaboratorAlias"></a>

```csharp
public string RunnerCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_auto_approval_rules#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRules#runner_collaborator_alias}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAutoApprovalRulesRulesList <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAutoApprovalRulesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get"></a>

```csharp
private DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference <a name="DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias">ResetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope">ResetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias">ResetRunnerCollaboratorAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorCollaboratorAlias` <a name="ResetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorCollaboratorAlias"></a>

```csharp
private void ResetAuthorCollaboratorAlias()
```

##### `ResetAuthorScope` <a name="ResetAuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetAuthorScope"></a>

```csharp
private void ResetAuthorScope()
```

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetCleanRoomName"></a>

```csharp
private void ResetCleanRoomName()
```

##### `ResetRunnerCollaboratorAlias` <a name="ResetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.resetRunnerCollaboratorAlias"></a>

```csharp
private void ResetRunnerCollaboratorAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias">RuleOwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput">AuthorCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput">AuthorScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput">RunnerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope">AuthorScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleOwnerCollaboratorAlias`<sup>Required</sup> <a name="RuleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.ruleOwnerCollaboratorAlias"></a>

```csharp
public string RuleOwnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `AuthorCollaboratorAliasInput`<sup>Optional</sup> <a name="AuthorCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAliasInput"></a>

```csharp
public string AuthorCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `AuthorScopeInput`<sup>Optional</sup> <a name="AuthorScopeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScopeInput"></a>

```csharp
public string AuthorScopeInput { get; }
```

- *Type:* string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliasInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAliasInput"></a>

```csharp
public string RunnerCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `AuthorCollaboratorAlias`<sup>Required</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorCollaboratorAlias"></a>

```csharp
public string AuthorCollaboratorAlias { get; }
```

- *Type:* string

---

##### `AuthorScope`<sup>Required</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.authorScope"></a>

```csharp
public string AuthorScope { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAlias`<sup>Required</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.runnerCollaboratorAlias"></a>

```csharp
public string RunnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRulesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAutoApprovalRulesRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRules.DataDatabricksCleanRoomAutoApprovalRulesRules">DataDatabricksCleanRoomAutoApprovalRulesRules</a>

---



