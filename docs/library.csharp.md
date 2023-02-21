# `library` Submodule <a name="`library` Submodule" id="@cdktf/provider-databricks.library"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Library <a name="Library" id="@cdktf/provider-databricks.library.Library"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/library databricks_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.Library.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Library(Construct Scope, string Id, LibraryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.library.Library.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryConfig">LibraryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.library.Library.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryConfig">LibraryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.library.Library.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.library.Library.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.library.Library.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.library.Library.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.library.Library.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.library.Library.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.library.Library.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.library.Library.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.library.Library.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.library.Library.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.library.Library.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.library.Library.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.library.Library.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.library.Library.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.library.Library.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.library.Library.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.library.Library.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.library.Library.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.library.Library.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.Library.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.library.Library.putCran"></a>

```csharp
private void PutCran(LibraryCran Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.library.Library.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.library.Library.putMaven"></a>

```csharp
private void PutMaven(LibraryMaven Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.library.Library.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.library.Library.putPypi"></a>

```csharp
private void PutPypi(LibraryPypi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.library.Library.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.library.Library.resetCran"></a>

```csharp
private void ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.library.Library.resetEgg"></a>

```csharp
private void ResetEgg()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.library.Library.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.library.Library.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.library.Library.resetMaven"></a>

```csharp
private void ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.library.Library.resetPypi"></a>

```csharp
private void ResetPypi()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.library.Library.resetWhl"></a>

```csharp
private void ResetWhl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.library.Library.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.library.Library.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Library.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.library.Library.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.library.Library.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Library.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.library.Library.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.library.Library.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Library.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.library.Library.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference">LibraryCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference">LibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference">LibraryPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.cranInput">CranInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.eggInput">EggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.jarInput">JarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.pypiInput">PypiInput</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.whlInput">WhlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.egg">Egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.jar">Jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.whl">Whl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.library.Library.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.library.Library.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.library.Library.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.library.Library.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.library.Library.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.library.Library.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.library.Library.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.library.Library.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.library.Library.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.library.Library.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.library.Library.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.library.Library.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.library.Library.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.library.Library.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.library.Library.property.cran"></a>

```csharp
public LibraryCranOutputReference Cran { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference">LibraryCranOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.library.Library.property.maven"></a>

```csharp
public LibraryMavenOutputReference Maven { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference">LibraryMavenOutputReference</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.library.Library.property.pypi"></a>

```csharp
public LibraryPypiOutputReference Pypi { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference">LibraryPypiOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.library.Library.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.library.Library.property.cranInput"></a>

```csharp
public LibraryCran CranInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.library.Library.property.eggInput"></a>

```csharp
public string EggInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.library.Library.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.library.Library.property.jarInput"></a>

```csharp
public string JarInput { get; }
```

- *Type:* string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.library.Library.property.mavenInput"></a>

```csharp
public LibraryMaven MavenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.library.Library.property.pypiInput"></a>

```csharp
public LibraryPypi PypiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.library.Library.property.whlInput"></a>

```csharp
public string WhlInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.library.Library.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.library.Library.property.egg"></a>

```csharp
public string Egg { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.library.Library.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.library.Library.property.jar"></a>

```csharp
public string Jar { get; }
```

- *Type:* string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.library.Library.property.whl"></a>

```csharp
public string Whl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.Library.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.library.Library.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryConfig <a name="LibraryConfig" id="@cdktf/provider-databricks.library.LibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    LibraryCran Cran = null,
    string Egg = null,
    string Id = null,
    string Jar = null,
    LibraryMaven Maven = null,
    LibraryPypi Pypi = null,
    string Whl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#cluster_id Library#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.egg">Egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#egg Library#egg}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#id Library#id}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.jar">Jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#jar Library#jar}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryConfig.property.whl">Whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#whl Library#whl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.library.LibraryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.library.LibraryConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.library.LibraryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.library.LibraryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.library.LibraryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.library.LibraryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.library.LibraryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.library.LibraryConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#cluster_id Library#cluster_id}.

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.library.LibraryConfig.property.cran"></a>

```csharp
public LibraryCran Cran { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

cran block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#cran Library#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.library.LibraryConfig.property.egg"></a>

```csharp
public string Egg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#egg Library#egg}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.library.LibraryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#id Library#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.library.LibraryConfig.property.jar"></a>

```csharp
public string Jar { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#jar Library#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.library.LibraryConfig.property.maven"></a>

```csharp
public LibraryMaven Maven { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#maven Library#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.library.LibraryConfig.property.pypi"></a>

```csharp
public LibraryPypi Pypi { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#pypi Library#pypi}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.library.LibraryConfig.property.whl"></a>

```csharp
public string Whl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#whl Library#whl}.

---

### LibraryCran <a name="LibraryCran" id="@cdktf/provider-databricks.library.LibraryCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryCran.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryCran {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCran.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#package Library#package}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCran.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.library.LibraryCran.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#package Library#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryCran.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}.

---

### LibraryMaven <a name="LibraryMaven" id="@cdktf/provider-databricks.library.LibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryMaven.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryMaven {
    string Coordinates,
    string[] Exclusions = null,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.coordinates">Coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#coordinates Library#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#exclusions Library#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMaven.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.library.LibraryMaven.property.coordinates"></a>

```csharp
public string Coordinates { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#coordinates Library#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.library.LibraryMaven.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#exclusions Library#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryMaven.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}.

---

### LibraryPypi <a name="LibraryPypi" id="@cdktf/provider-databricks.library.LibraryPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.library.LibraryPypi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPypi {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypi.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#package Library#package}. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypi.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.library.LibraryPypi.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#package Library#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryPypi.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/library#repo Library#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryCranOutputReference <a name="LibraryCranOutputReference" id="@cdktf/provider-databricks.library.LibraryCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryCranOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryCranOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.library.LibraryCranOutputReference.property.internalValue"></a>

```csharp
public LibraryCran InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryCran">LibraryCran</a>

---


### LibraryMavenOutputReference <a name="LibraryMavenOutputReference" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryMavenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinatesInput"></a>

```csharp
public string CoordinatesInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.coordinates"></a>

```csharp
public string Coordinates { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.library.LibraryMavenOutputReference.property.internalValue"></a>

```csharp
public LibraryMaven InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryMaven">LibraryMaven</a>

---


### LibraryPypiOutputReference <a name="LibraryPypiOutputReference" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPypiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.library.LibraryPypiOutputReference.property.internalValue"></a>

```csharp
public LibraryPypi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.library.LibraryPypi">LibraryPypi</a>

---


