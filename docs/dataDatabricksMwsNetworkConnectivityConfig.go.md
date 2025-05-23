# `dataDatabricksMwsNetworkConnectivityConfig` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfig <a name="DataDatabricksMwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfig(scope Construct, id *string, config DataDatabricksMwsNetworkConnectivityConfigConfig) DataDatabricksMwsNetworkConnectivityConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig">DataDatabricksMwsNetworkConnectivityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig">DataDatabricksMwsNetworkConnectivityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig">PutEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig">ResetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEgressConfig` <a name="PutEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig"></a>

```go
func PutEgressConfig(value DataDatabricksMwsNetworkConnectivityConfigEgressConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetEgressConfig` <a name="ResetEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig"></a>

```go
func ResetEgressConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```go
func ResetNetworkConnectivityConfigId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput">EgressConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EgressConfig`<sup>Required</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig"></a>

```go
func EgressConfig() DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `EgressConfigInput`<sup>Optional</sup> <a name="EgressConfigInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```go
func EgressConfigInput() DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigConfig <a name="DataDatabricksMwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountId: *string,
	CreationTime: *f64,
	EgressConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig,
	Id: *string,
	NetworkConnectivityConfigId: *string,
	Region: *string,
	UpdatedTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `EgressConfig`<sup>Optional</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```go
EgressConfig DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfig <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig {
	DefaultRules: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules,
	TargetRules: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `DefaultRules`<sup>Optional</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```go
DefaultRules DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#default_rules DataDatabricksMwsNetworkConnectivityConfig#default_rules}

---

##### `TargetRules`<sup>Optional</sup> <a name="TargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```go
TargetRules DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#target_rules DataDatabricksMwsNetworkConnectivityConfig#target_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules {
	AwsStableIpRule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule,
	AzureServiceEndpointRule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `AwsStableIpRule`<sup>Optional</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```go
AwsStableIpRule DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#aws_stable_ip_rule DataDatabricksMwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `AzureServiceEndpointRule`<sup>Optional</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```go
AzureServiceEndpointRule DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#azure_service_endpoint_rule DataDatabricksMwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule {
	CidrBlocks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule {
	Subnets: *[]*string,
	TargetRegion: *string,
	TargetServices: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">TargetRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">TargetServices</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}. |

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}.

---

##### `TargetRegion`<sup>Optional</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```go
TargetRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}.

---

##### `TargetServices`<sup>Optional</sup> <a name="TargetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```go
TargetServices *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules {
	AzurePrivateEndpointRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code>interface{}</code> | azure_private_endpoint_rules block. |

---

##### `AzurePrivateEndpointRules`<sup>Optional</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```go
AzurePrivateEndpointRules interface{}
```

- *Type:* interface{}

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#azure_private_endpoint_rules DataDatabricksMwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

&datadatabricksmwsnetworkconnectivityconfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules {
	ConnectionState: *string,
	CreationTime: *f64,
	Deactivated: interface{},
	DeactivatedAt: *f64,
	DomainNames: *[]*string,
	EndpointName: *string,
	GroupId: *string,
	NetworkConnectivityConfigId: *string,
	ResourceId: *string,
	RuleId: *string,
	UpdatedTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">ConnectionState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#domain_names DataDatabricksMwsNetworkConnectivityConfig#domain_names}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```go
ConnectionState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```go
Deactivated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```go
DeactivatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#domain_names DataDatabricksMwsNetworkConnectivityConfig#domain_names}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">ResetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">ResetTargetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```

##### `ResetTargetRegion` <a name="ResetTargetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```go
func ResetTargetRegion()
```

##### `ResetTargetServices` <a name="ResetTargetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```go
func ResetTargetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">TargetRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">TargetServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">TargetRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">TargetServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```go
func TargetRegionInput() *string
```

- *Type:* *string

---

##### `TargetServicesInput`<sup>Optional</sup> <a name="TargetServicesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```go
func TargetServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```go
func TargetRegion() *string
```

- *Type:* *string

---

##### `TargetServices`<sup>Required</sup> <a name="TargetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```go
func TargetServices() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">PutAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">PutAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">ResetAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">ResetAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsStableIpRule` <a name="PutAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```go
func PutAwsStableIpRule(value DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `PutAzureServiceEndpointRule` <a name="PutAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```go
func PutAzureServiceEndpointRule(value DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `ResetAwsStableIpRule` <a name="ResetAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```go
func ResetAwsStableIpRule()
```

##### `ResetAzureServiceEndpointRule` <a name="ResetAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```go
func ResetAzureServiceEndpointRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">AwsStableIpRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">AzureServiceEndpointRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsStableIpRule`<sup>Required</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```go
func AwsStableIpRule() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `AzureServiceEndpointRule`<sup>Required</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```go
func AzureServiceEndpointRule() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `AwsStableIpRuleInput`<sup>Optional</sup> <a name="AwsStableIpRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```go
func AwsStableIpRuleInput() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `AzureServiceEndpointRuleInput`<sup>Optional</sup> <a name="AzureServiceEndpointRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```go
func AzureServiceEndpointRuleInput() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">PutDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">PutTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">ResetDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">ResetTargetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRules` <a name="PutDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```go
func PutDefaultRules(value DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `PutTargetRules` <a name="PutTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```go
func PutTargetRules(value DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `ResetDefaultRules` <a name="ResetDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```go
func ResetDefaultRules()
```

##### `ResetTargetRules` <a name="ResetTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```go
func ResetTargetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">DefaultRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">TargetRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRules`<sup>Required</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```go
func DefaultRules() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `TargetRules`<sup>Required</sup> <a name="TargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```go
func TargetRules() DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `DefaultRulesInput`<sup>Optional</sup> <a name="DefaultRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```go
func DefaultRulesInput() DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `TargetRulesInput`<sup>Optional</sup> <a name="TargetRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```go
func TargetRulesInput() DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMwsNetworkConnectivityConfigEgressConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```go
func Get(index *f64) DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```go
func ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```go
func ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```go
func ResetDeactivatedAt()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames"></a>

```go
func ResetDomainNames()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```go
func ResetNetworkConnectivityConfigId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">ConnectionStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">DeactivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```go
func ConnectionStateInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```go
func DeactivatedAtInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```go
func DeactivatedInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```go
func Deactivated() interface{}
```

- *Type:* interface{}

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```go
func DeactivatedAt() *f64
```

- *Type:* *f64

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmwsnetworkconnectivityconfig"

datadatabricksmwsnetworkconnectivityconfig.NewDataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">PutAzurePrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">ResetAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzurePrivateEndpointRules` <a name="PutAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```go
func PutAzurePrivateEndpointRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAzurePrivateEndpointRules` <a name="ResetAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```go
func ResetAzurePrivateEndpointRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">AzurePrivateEndpointRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzurePrivateEndpointRules`<sup>Required</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```go
func AzurePrivateEndpointRules() DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `AzurePrivateEndpointRulesInput`<sup>Optional</sup> <a name="AzurePrivateEndpointRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```go
func AzurePrivateEndpointRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



