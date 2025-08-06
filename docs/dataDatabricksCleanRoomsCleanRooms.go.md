# `dataDatabricksCleanRoomsCleanRooms` Submodule <a name="`dataDatabricksCleanRoomsCleanRooms` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomsCleanRooms <a name="DataDatabricksCleanRoomsCleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms databricks_clean_rooms_clean_rooms}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRooms(scope Construct, id *string, config DataDatabricksCleanRoomsCleanRoomsConfig) DataDatabricksCleanRoomsCleanRooms
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig">DataDatabricksCleanRoomsCleanRoomsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig">DataDatabricksCleanRoomsCleanRoomsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRooms resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRooms_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRooms_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRooms_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRooms_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRooms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRooms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCleanRoomsCleanRooms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRooms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cleanRooms">CleanRooms</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CleanRooms`<sup>Required</sup> <a name="CleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.cleanRooms"></a>

```go
func CleanRooms() DataDatabricksCleanRoomsCleanRoomsCleanRoomsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRooms.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomsCleanRoomsCleanRooms <a name="DataDatabricksCleanRoomsCleanRoomsCleanRooms" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms {
	Comment: *string,
	Name: *string,
	Owner: *string,
	RemoteDetailedInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#comment DataDatabricksCleanRoomsCleanRooms#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#name DataDatabricksCleanRoomsCleanRooms#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#owner DataDatabricksCleanRoomsCleanRooms#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#remote_detailed_info DataDatabricksCleanRoomsCleanRooms#remote_detailed_info}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#comment DataDatabricksCleanRoomsCleanRooms#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#name DataDatabricksCleanRoomsCleanRooms#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#owner DataDatabricksCleanRoomsCleanRooms#owner}.

---

##### `RemoteDetailedInfo`<sup>Optional</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms.property.remoteDetailedInfo"></a>

```go
RemoteDetailedInfo DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#remote_detailed_info DataDatabricksCleanRoomsCleanRooms#remote_detailed_info}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog {
	CatalogName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#catalog_name DataDatabricksCleanRoomsCleanRooms#catalog_name}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#catalog_name DataDatabricksCleanRoomsCleanRooms#catalog_name}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo {
	CloudVendor: *string,
	Collaborators: interface{},
	EgressNetworkPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.cloudVendor">CloudVendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#cloud_vendor DataDatabricksCleanRoomsCleanRooms#cloud_vendor}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.collaborators">Collaborators</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborators DataDatabricksCleanRoomsCleanRooms#collaborators}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#egress_network_policy DataDatabricksCleanRoomsCleanRooms#egress_network_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}. |

---

##### `CloudVendor`<sup>Optional</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.cloudVendor"></a>

```go
CloudVendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#cloud_vendor DataDatabricksCleanRoomsCleanRooms#cloud_vendor}.

---

##### `Collaborators`<sup>Optional</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.collaborators"></a>

```go
Collaborators interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborators DataDatabricksCleanRoomsCleanRooms#collaborators}.

---

##### `EgressNetworkPolicy`<sup>Optional</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.egressNetworkPolicy"></a>

```go
EgressNetworkPolicy DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#egress_network_policy DataDatabricksCleanRoomsCleanRooms#egress_network_policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators {
	CollaboratorAlias: *string,
	GlobalMetastoreId: *string,
	InviteRecipientEmail: *string,
	InviteRecipientWorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.collaboratorAlias"></a>

```go
CollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.globalMetastoreId"></a>

```go
GlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientEmail"></a>

```go
InviteRecipientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId"></a>

```go
InviteRecipientWorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile {
	ComplianceStandards: *[]*string,
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#compliance_standards DataDatabricksCleanRoomsCleanRooms#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#is_enabled DataDatabricksCleanRoomsCleanRooms#is_enabled}. |

---

##### `ComplianceStandards`<sup>Optional</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards"></a>

```go
ComplianceStandards *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#compliance_standards DataDatabricksCleanRoomsCleanRooms#compliance_standards}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#is_enabled DataDatabricksCleanRoomsCleanRooms#is_enabled}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator {
	CollaboratorAlias: *string,
	GlobalMetastoreId: *string,
	InviteRecipientEmail: *string,
	InviteRecipientWorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.collaboratorAlias"></a>

```go
CollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#collaborator_alias DataDatabricksCleanRoomsCleanRooms#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.globalMetastoreId"></a>

```go
GlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#global_metastore_id DataDatabricksCleanRoomsCleanRooms#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientEmail"></a>

```go
InviteRecipientEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_email DataDatabricksCleanRoomsCleanRooms#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId"></a>

```go
InviteRecipientWorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRooms#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy {
	InternetAccess: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#internet_access DataDatabricksCleanRoomsCleanRooms#internet_access}. |

---

##### `InternetAccess`<sup>Optional</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess"></a>

```go
InternetAccess DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#internet_access DataDatabricksCleanRoomsCleanRooms#internet_access}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess {
	AllowedInternetDestinations: interface{},
	AllowedStorageDestinations: interface{},
	LogOnlyMode: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode,
	RestrictionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_internet_destinations DataDatabricksCleanRoomsCleanRooms#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_storage_destinations DataDatabricksCleanRoomsCleanRooms#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode DataDatabricksCleanRoomsCleanRooms#log_only_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#restriction_mode DataDatabricksCleanRoomsCleanRooms#restriction_mode}. |

---

##### `AllowedInternetDestinations`<sup>Optional</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations"></a>

```go
AllowedInternetDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_internet_destinations DataDatabricksCleanRoomsCleanRooms#allowed_internet_destinations}.

---

##### `AllowedStorageDestinations`<sup>Optional</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations"></a>

```go
AllowedStorageDestinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_storage_destinations DataDatabricksCleanRoomsCleanRooms#allowed_storage_destinations}.

---

##### `LogOnlyMode`<sup>Optional</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode"></a>

```go
LogOnlyMode DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode DataDatabricksCleanRoomsCleanRooms#log_only_mode}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode"></a>

```go
RestrictionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#restriction_mode DataDatabricksCleanRoomsCleanRooms#restriction_mode}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations {
	Destination: *string,
	Protocol: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#destination DataDatabricksCleanRoomsCleanRooms#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#protocol DataDatabricksCleanRoomsCleanRooms#protocol}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#destination DataDatabricksCleanRoomsCleanRooms#destination}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#protocol DataDatabricksCleanRoomsCleanRooms#protocol}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations {
	AllowedPaths: *[]*string,
	AzureContainer: *string,
	AzureDnsZone: *string,
	AzureStorageAccount: *string,
	AzureStorageService: *string,
	BucketName: *string,
	Region: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths">AllowedPaths</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_paths DataDatabricksCleanRoomsCleanRooms#allowed_paths}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer">AzureContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_container DataDatabricksCleanRoomsCleanRooms#azure_container}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone">AzureDnsZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_dns_zone DataDatabricksCleanRoomsCleanRooms#azure_dns_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_account DataDatabricksCleanRoomsCleanRooms#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_service DataDatabricksCleanRoomsCleanRooms#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#bucket_name DataDatabricksCleanRoomsCleanRooms#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}. |

---

##### `AllowedPaths`<sup>Optional</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths"></a>

```go
AllowedPaths *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#allowed_paths DataDatabricksCleanRoomsCleanRooms#allowed_paths}.

---

##### `AzureContainer`<sup>Optional</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer"></a>

```go
AzureContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_container DataDatabricksCleanRoomsCleanRooms#azure_container}.

---

##### `AzureDnsZone`<sup>Optional</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone"></a>

```go
AzureDnsZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_dns_zone DataDatabricksCleanRoomsCleanRooms#azure_dns_zone}.

---

##### `AzureStorageAccount`<sup>Optional</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```go
AzureStorageAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_account DataDatabricksCleanRoomsCleanRooms#azure_storage_account}.

---

##### `AzureStorageService`<sup>Optional</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService"></a>

```go
AzureStorageService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#azure_storage_service DataDatabricksCleanRoomsCleanRooms#azure_storage_service}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#bucket_name DataDatabricksCleanRoomsCleanRooms#bucket_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#region DataDatabricksCleanRoomsCleanRooms#region}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#type DataDatabricksCleanRoomsCleanRooms#type}.

---

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode {
	LogOnlyModeType: *string,
	Workloads: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode_type DataDatabricksCleanRoomsCleanRooms#log_only_mode_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads">Workloads</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#workloads DataDatabricksCleanRoomsCleanRooms#workloads}. |

---

##### `LogOnlyModeType`<sup>Optional</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType"></a>

```go
LogOnlyModeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#log_only_mode_type DataDatabricksCleanRoomsCleanRooms#log_only_mode_type}.

---

##### `Workloads`<sup>Optional</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads"></a>

```go
Workloads *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_rooms_clean_rooms#workloads DataDatabricksCleanRoomsCleanRooms#workloads}.

---

### DataDatabricksCleanRoomsCleanRoomsConfig <a name="DataDatabricksCleanRoomsCleanRoomsConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

&datadatabrickscleanroomscleanrooms.DataDatabricksCleanRoomsCleanRoomsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomsCleanRoomsCleanRoomsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalog</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo">PutRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetRemoteDetailedInfo">ResetRemoteDetailedInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRemoteDetailedInfo` <a name="PutRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo"></a>

```go
func PutRemoteDetailedInfo(value DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.putRemoteDetailedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfo</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetRemoteDetailedInfo` <a name="ResetRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.resetRemoteDetailedInfo"></a>

```go
func ResetRemoteDetailedInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.accessRestricted">AccessRestricted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.localCollaboratorAlias">LocalCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.outputCatalog">OutputCatalog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfoInput">RemoteDetailedInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRestricted`<sup>Required</sup> <a name="AccessRestricted" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.accessRestricted"></a>

```go
func AccessRestricted() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `LocalCollaboratorAlias`<sup>Required</sup> <a name="LocalCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.localCollaboratorAlias"></a>

```go
func LocalCollaboratorAlias() *string
```

- *Type:* *string

---

##### `OutputCatalog`<sup>Required</sup> <a name="OutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.outputCatalog"></a>

```go
func OutputCatalog() DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputCatalogOutputReference</a>

---

##### `RemoteDetailedInfo`<sup>Required</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfo"></a>

```go
func RemoteDetailedInfo() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `RemoteDetailedInfoInput`<sup>Optional</sup> <a name="RemoteDetailedInfoInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.remoteDetailedInfoInput"></a>

```go
func RemoteDetailedInfoInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomsCleanRooms
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRooms">DataDatabricksCleanRoomsCleanRoomsCleanRooms</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId"></a>

```go
func ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail"></a>

```go
func ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId"></a>

```go
func ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput"></a>

```go
func CollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput"></a>

```go
func GlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput"></a>

```go
func InviteRecipientEmailInput() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```go
func InviteRecipientWorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias"></a>

```go
func CollaboratorAlias() *string
```

- *Type:* *string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail"></a>

```go
func InviteRecipientEmail() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId"></a>

```go
func InviteRecipientWorkspaceId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards">ResetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceStandards` <a name="ResetComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards"></a>

```go
func ResetComplianceStandards()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput"></a>

```go
func ComplianceStandardsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards"></a>

```go
func ComplianceStandards() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfile</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId"></a>

```go
func ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail"></a>

```go
func ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId"></a>

```go
func ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput"></a>

```go
func CollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput"></a>

```go
func GlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput"></a>

```go
func InviteRecipientEmailInput() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```go
func InviteRecipientWorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias"></a>

```go
func CollaboratorAlias() *string
```

- *Type:* *string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail"></a>

```go
func InviteRecipientEmail() *string
```

- *Type:* *string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId"></a>

```go
func InviteRecipientWorkspaceId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreator</a>

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths">ResetAllowedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer">ResetAzureContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone">ResetAzureDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">ResetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">ResetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedPaths` <a name="ResetAllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths"></a>

```go
func ResetAllowedPaths()
```

##### `ResetAzureContainer` <a name="ResetAzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer"></a>

```go
func ResetAzureContainer()
```

##### `ResetAzureDnsZone` <a name="ResetAzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone"></a>

```go
func ResetAzureDnsZone()
```

##### `ResetAzureStorageAccount` <a name="ResetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```go
func ResetAzureStorageAccount()
```

##### `ResetAzureStorageService` <a name="ResetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```go
func ResetAzureStorageService()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput">AllowedPathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput">AzureContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput">AzureDnsZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">AzureStorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">AzureStorageServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths">AllowedPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer">AzureContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone">AzureDnsZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">AzureStorageService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPathsInput`<sup>Optional</sup> <a name="AllowedPathsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput"></a>

```go
func AllowedPathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AzureContainerInput`<sup>Optional</sup> <a name="AzureContainerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput"></a>

```go
func AzureContainerInput() *string
```

- *Type:* *string

---

##### `AzureDnsZoneInput`<sup>Optional</sup> <a name="AzureDnsZoneInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput"></a>

```go
func AzureDnsZoneInput() *string
```

- *Type:* *string

---

##### `AzureStorageAccountInput`<sup>Optional</sup> <a name="AzureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```go
func AzureStorageAccountInput() *string
```

- *Type:* *string

---

##### `AzureStorageServiceInput`<sup>Optional</sup> <a name="AzureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```go
func AzureStorageServiceInput() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowedPaths`<sup>Required</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths"></a>

```go
func AllowedPaths() *[]*string
```

- *Type:* *[]*string

---

##### `AzureContainer`<sup>Required</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer"></a>

```go
func AzureContainer() *string
```

- *Type:* *string

---

##### `AzureDnsZone`<sup>Required</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone"></a>

```go
func AzureDnsZone() *string
```

- *Type:* *string

---

##### `AzureStorageAccount`<sup>Required</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```go
func AzureStorageAccount() *string
```

- *Type:* *string

---

##### `AzureStorageService`<sup>Required</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```go
func AzureStorageService() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType">ResetLogOnlyModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads">ResetWorkloads</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogOnlyModeType` <a name="ResetLogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType"></a>

```go
func ResetLogOnlyModeType()
```

##### `ResetWorkloads` <a name="ResetWorkloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads"></a>

```go
func ResetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput">LogOnlyModeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput">WorkloadsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads">Workloads</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogOnlyModeTypeInput`<sup>Optional</sup> <a name="LogOnlyModeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput"></a>

```go
func LogOnlyModeTypeInput() *string
```

- *Type:* *string

---

##### `WorkloadsInput`<sup>Optional</sup> <a name="WorkloadsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput"></a>

```go
func WorkloadsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogOnlyModeType`<sup>Required</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType"></a>

```go
func LogOnlyModeType() *string
```

- *Type:* *string

---

##### `Workloads`<sup>Required</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads"></a>

```go
func Workloads() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations">PutAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations">PutAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode">PutLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations">ResetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations">ResetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode">ResetLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedInternetDestinations` <a name="PutAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations"></a>

```go
func PutAllowedInternetDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedStorageDestinations` <a name="PutAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations"></a>

```go
func PutAllowedStorageDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogOnlyMode` <a name="PutLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode"></a>

```go
func PutLogOnlyMode(value DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `ResetAllowedInternetDestinations` <a name="ResetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations"></a>

```go
func ResetAllowedInternetDestinations()
```

##### `ResetAllowedStorageDestinations` <a name="ResetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations"></a>

```go
func ResetAllowedStorageDestinations()
```

##### `ResetLogOnlyMode` <a name="ResetLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode"></a>

```go
func ResetLogOnlyMode()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode"></a>

```go
func ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput">AllowedInternetDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput">AllowedStorageDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput">LogOnlyModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedInternetDestinations`<sup>Required</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations"></a>

```go
func AllowedInternetDestinations() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a>

---

##### `AllowedStorageDestinations`<sup>Required</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations"></a>

```go
func AllowedStorageDestinations() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a>

---

##### `LogOnlyMode`<sup>Required</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode"></a>

```go
func LogOnlyMode() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a>

---

##### `AllowedInternetDestinationsInput`<sup>Optional</sup> <a name="AllowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```go
func AllowedInternetDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedStorageDestinationsInput`<sup>Optional</sup> <a name="AllowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```go
func AllowedStorageDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `LogOnlyModeInput`<sup>Optional</sup> <a name="LogOnlyModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput"></a>

```go
func LogOnlyModeInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput"></a>

```go
func RestrictionModeInput() *string
```

- *Type:* *string

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode"></a>

```go
func RestrictionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess">PutInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess">ResetInternetAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternetAccess` <a name="PutInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess"></a>

```go
func PutInternetAccess(value DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `ResetInternetAccess` <a name="ResetInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess"></a>

```go
func ResetInternetAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput">InternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternetAccess`<sup>Required</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess"></a>

```go
func InternetAccess() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a>

---

##### `InternetAccessInput`<sup>Optional</sup> <a name="InternetAccessInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput"></a>

```go
func InternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference <a name="DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomscleanrooms"

datadatabrickscleanroomscleanrooms.NewDataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators">PutCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy">PutEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCloudVendor">ResetCloudVendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCollaborators">ResetCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy">ResetEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborators` <a name="PutCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators"></a>

```go
func PutCollaborators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putCollaborators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEgressNetworkPolicy` <a name="PutEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy"></a>

```go
func PutEgressNetworkPolicy(value DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.putEgressNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `ResetCloudVendor` <a name="ResetCloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCloudVendor"></a>

```go
func ResetCloudVendor()
```

##### `ResetCollaborators` <a name="ResetCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetCollaborators"></a>

```go
func ResetCollaborators()
```

##### `ResetEgressNetworkPolicy` <a name="ResetEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy"></a>

```go
func ResetEgressNetworkPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.centralCleanRoomId">CentralCleanRoomId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaborators">Collaborators</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.complianceSecurityProfile">ComplianceSecurityProfile</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creator">Creator</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendorInput">CloudVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaboratorsInput">CollaboratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput">EgressNetworkPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendor">CloudVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CentralCleanRoomId`<sup>Required</sup> <a name="CentralCleanRoomId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.centralCleanRoomId"></a>

```go
func CentralCleanRoomId() *string
```

- *Type:* *string

---

##### `Collaborators`<sup>Required</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaborators"></a>

```go
func Collaborators() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCollaboratorsList</a>

---

##### `ComplianceSecurityProfile`<sup>Required</sup> <a name="ComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.complianceSecurityProfile"></a>

```go
func ComplianceSecurityProfile() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoComplianceSecurityProfileOutputReference</a>

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.creator"></a>

```go
func Creator() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoCreatorOutputReference</a>

---

##### `EgressNetworkPolicy`<sup>Required</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicy"></a>

```go
func EgressNetworkPolicy() DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoEgressNetworkPolicyOutputReference</a>

---

##### `CloudVendorInput`<sup>Optional</sup> <a name="CloudVendorInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendorInput"></a>

```go
func CloudVendorInput() *string
```

- *Type:* *string

---

##### `CollaboratorsInput`<sup>Optional</sup> <a name="CollaboratorsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.collaboratorsInput"></a>

```go
func CollaboratorsInput() interface{}
```

- *Type:* interface{}

---

##### `EgressNetworkPolicyInput`<sup>Optional</sup> <a name="EgressNetworkPolicyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput"></a>

```go
func EgressNetworkPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CloudVendor`<sup>Required</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.cloudVendor"></a>

```go
func CloudVendor() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRooms.DataDatabricksCleanRoomsCleanRoomsCleanRoomsRemoteDetailedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



