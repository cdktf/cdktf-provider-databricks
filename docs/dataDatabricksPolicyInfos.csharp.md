# `dataDatabricksPolicyInfos` Submodule <a name="`dataDatabricksPolicyInfos` Submodule" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfos <a name="DataDatabricksPolicyInfos" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos databricks_policy_infos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfos(Construct Scope, string Id, DataDatabricksPolicyInfosConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig">DataDatabricksPolicyInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited">ResetIncludeInherited</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults">ResetMaxResults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetIncludeInherited` <a name="ResetIncludeInherited" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetIncludeInherited"></a>

```csharp
private void ResetIncludeInherited()
```

##### `ResetMaxResults` <a name="ResetMaxResults" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.resetMaxResults"></a>

```csharp
private void ResetMaxResults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPolicyInfos resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfos.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfos.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfos.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfos.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksPolicyInfos resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPolicyInfos to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPolicyInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput">IncludeInheritedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput">MaxResultsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited">IncludeInherited</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults">MaxResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.policies"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList">DataDatabricksPolicyInfosPoliciesList</a>

---

##### `IncludeInheritedInput`<sup>Optional</sup> <a name="IncludeInheritedInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInheritedInput"></a>

```csharp
public bool|IResolvable IncludeInheritedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResultsInput"></a>

```csharp
public double MaxResultsInput { get; }
```

- *Type:* double

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullnameInput"></a>

```csharp
public string OnSecurableFullnameInput { get; }
```

- *Type:* string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableTypeInput"></a>

```csharp
public string OnSecurableTypeInput { get; }
```

- *Type:* string

---

##### `IncludeInherited`<sup>Required</sup> <a name="IncludeInherited" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.includeInherited"></a>

```csharp
public bool|IResolvable IncludeInherited { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.maxResults"></a>

```csharp
public double MaxResults { get; }
```

- *Type:* double

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; }
```

- *Type:* string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfos.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfosConfig <a name="DataDatabricksPolicyInfosConfig" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OnSecurableFullname,
    string OnSecurableType,
    bool|IResolvable IncludeInherited = null,
    double MaxResults = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited">IncludeInherited</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults">MaxResults</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

##### `IncludeInherited`<sup>Optional</sup> <a name="IncludeInherited" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.includeInherited"></a>

```csharp
public bool|IResolvable IncludeInherited { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#include_inherited DataDatabricksPolicyInfos#include_inherited}.

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosConfig.property.maxResults"></a>

```csharp
public double MaxResults { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#max_results DataDatabricksPolicyInfos#max_results}.

---

### DataDatabricksPolicyInfosPolicies <a name="DataDatabricksPolicyInfosPolicies" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPolicies {
    string Name,
    string OnSecurableFullname,
    string OnSecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#name DataDatabricksPolicyInfos#name}.

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_fullname DataDatabricksPolicyInfos#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_securable_type DataDatabricksPolicyInfos#on_securable_type}.

---

### DataDatabricksPolicyInfosPoliciesColumnMask <a name="DataDatabricksPolicyInfosPoliciesColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesColumnMask {
    string FunctionName,
    string OnColumn,
    IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] Using = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn">OnColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using">Using</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.onColumn"></a>

```csharp
public string OnColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#on_column DataDatabricksPolicyInfos#on_column}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask.property.using"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] Using { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesColumnMaskUsing <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesColumnMaskUsing {
    string Alias = null,
    string Constant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant">Constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing.property.constant"></a>

```csharp
public string Constant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

### DataDatabricksPolicyInfosPoliciesMatchColumns <a name="DataDatabricksPolicyInfosPoliciesMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesMatchColumns {
    string Alias = null,
    string Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#condition DataDatabricksPolicyInfos#condition}.

---

### DataDatabricksPolicyInfosPoliciesRowFilter <a name="DataDatabricksPolicyInfosPoliciesRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesRowFilter {
    string FunctionName,
    IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing[] Using = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using">Using</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#function_name DataDatabricksPolicyInfos#function_name}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter.property.using"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing[] Using { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#using DataDatabricksPolicyInfos#using}.

---

### DataDatabricksPolicyInfosPoliciesRowFilterUsing <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesRowFilterUsing {
    string Alias = null,
    string Constant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant">Constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#alias DataDatabricksPolicyInfos#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing.property.constant"></a>

```csharp
public string Constant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/policy_infos#constant DataDatabricksPolicyInfos#constant}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing"></a>

```csharp
private void PutUsing(IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.resetUsing"></a>

```csharp
private void ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using">Using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput">OnColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput">UsingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn">OnColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.using"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesColumnMaskUsingList Using { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList">DataDatabricksPolicyInfosPoliciesColumnMaskUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `OnColumnInput`<sup>Optional</sup> <a name="OnColumnInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumnInput"></a>

```csharp
public string OnColumnInput { get; }
```

- *Type:* string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.usingInput"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] UsingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.onColumn"></a>

```csharp
public string OnColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesColumnMask InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMask">DataDatabricksPolicyInfosPoliciesColumnMask</a>

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingList <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesColumnMaskUsingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get"></a>

```csharp
private DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.resetConstant"></a>

```csharp
private void ResetConstant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant">Constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constantInput"></a>

```csharp
public string ConstantInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.constant"></a>

```csharp
public string Constant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesColumnMaskUsing InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskUsing">DataDatabricksPolicyInfosPoliciesColumnMaskUsing</a>

---


### DataDatabricksPolicyInfosPoliciesList <a name="DataDatabricksPolicyInfosPoliciesList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get"></a>

```csharp
private DataDatabricksPolicyInfosPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPolicies[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsList <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesMatchColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get"></a>

```csharp
private DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesMatchColumns[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>[]

---


### DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference <a name="DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesMatchColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumns">DataDatabricksPolicyInfosPoliciesMatchColumns</a>

---


### DataDatabricksPolicyInfosPoliciesOutputReference <a name="DataDatabricksPolicyInfosPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask">ColumnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals">ExceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType">ForSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns">MatchColumns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals">ToPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition">WhenCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnMask`<sup>Required</sup> <a name="ColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.columnMask"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference ColumnMask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference">DataDatabricksPolicyInfosPoliciesColumnMaskOutputReference</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ExceptPrincipals`<sup>Required</sup> <a name="ExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.exceptPrincipals"></a>

```csharp
public string[] ExceptPrincipals { get; }
```

- *Type:* string[]

---

##### `ForSecurableType`<sup>Required</sup> <a name="ForSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.forSecurableType"></a>

```csharp
public string ForSecurableType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchColumns`<sup>Required</sup> <a name="MatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.matchColumns"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesMatchColumnsList MatchColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesMatchColumnsList">DataDatabricksPolicyInfosPoliciesMatchColumnsList</a>

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.rowFilter"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesRowFilterOutputReference RowFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference">DataDatabricksPolicyInfosPoliciesRowFilterOutputReference</a>

---

##### `ToPrincipals`<sup>Required</sup> <a name="ToPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.toPrincipals"></a>

```csharp
public string[] ToPrincipals { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `WhenCondition`<sup>Required</sup> <a name="WhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.whenCondition"></a>

```csharp
public string WhenCondition { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullnameInput"></a>

```csharp
public string OnSecurableFullnameInput { get; }
```

- *Type:* string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableTypeInput"></a>

```csharp
public string OnSecurableTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; }
```

- *Type:* string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPolicyInfosPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPolicies">DataDatabricksPolicyInfosPolicies</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesRowFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing"></a>

```csharp
private void PutUsing(IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.resetUsing"></a>

```csharp
private void ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using">Using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput">UsingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.using"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesRowFilterUsingList Using { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList">DataDatabricksPolicyInfosPoliciesRowFilterUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.usingInput"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing[] UsingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPolicyInfosPoliciesRowFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilter">DataDatabricksPolicyInfosPoliciesRowFilter</a>

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingList <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesRowFilterUsingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get"></a>

```csharp
private DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>[]

---


### DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.resetConstant"></a>

```csharp
private void ResetConstant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant">Constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constantInput"></a>

```csharp
public string ConstantInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.constant"></a>

```csharp
public string Constant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPolicyInfosPoliciesRowFilterUsing InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfos.DataDatabricksPolicyInfosPoliciesRowFilterUsing">DataDatabricksPolicyInfosPoliciesRowFilterUsing</a>

---



