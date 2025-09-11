# `dataDatabricksRecipientFederationPolicies` Submodule <a name="`dataDatabricksRecipientFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRecipientFederationPolicies <a name="DataDatabricksRecipientFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies databricks_recipient_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPolicies(Construct Scope, string Id, DataDatabricksRecipientFederationPoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig">DataDatabricksRecipientFederationPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig">DataDatabricksRecipientFederationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRecipientFederationPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRecipientFederationPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRecipientFederationPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRecipientFederationPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksRecipientFederationPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksRecipientFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRecipientFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies"></a>

```csharp
public DataDatabricksRecipientFederationPoliciesPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRecipientFederationPoliciesConfig <a name="DataDatabricksRecipientFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesConfig {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#workspace_id DataDatabricksRecipientFederationPolicies#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#workspace_id DataDatabricksRecipientFederationPolicies#workspace_id}.

---

### DataDatabricksRecipientFederationPoliciesPolicies <a name="DataDatabricksRecipientFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesPolicies {
    string Comment = null,
    string Name = null,
    DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy OidcPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy"></a>

```csharp
public DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy OidcPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}.

---

### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy {
    string Issuer,
    string Subject,
    string SubjectClaim,
    string[] Audiences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}. |

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}.

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}.

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRecipientFederationPoliciesPoliciesList <a name="DataDatabricksRecipientFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get"></a>

```csharp
private DataDatabricksRecipientFederationPoliciesPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksRecipientFederationPoliciesPoliciesOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRecipientFederationPoliciesPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```csharp
private void PutOidcPolicy(DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```csharp
private void ResetOidcPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```csharp
public DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```csharp
public object OidcPolicyInput { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksRecipientFederationPoliciesPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>

---



